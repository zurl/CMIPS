import {NodeSymbol, NodeType} from "./parser";
import {IntType, pointerTo, VoidType, toStringType, equalType, isPointer, funcPointer} from "./type";
/**
 *  @file  C-MIPS-Compiler Intermediate Representation Code Generator
 *  @author zcy <zurl@live.com>
 *  Created at 2/2/2017
 */

/*
    Type System
    integer
    * integer
 */

interface Type{

}

const FuncSymbol = Symbol("func");
const LeftSymbol = Symbol("left");
const ImmSymbol = Symbol("imm");
const VarSymbol = Symbol("var");

function isIMM(item){
    return item[0] == ImmSymbol;
}

function getType(name, pointer){
    let baseType = null;
    if(name == "int") baseType = IntType;
    else if( name == "void") baseType = VoidType;
    else throw "error type " + name;
    for(let item of pointer){ baseType = pointerTo(baseType);}
    return baseType;
}

function resolveParameters(node){
    return node.map(item=>[
        item[1][1][0][0][0],
        getType(item[0][0][0][0][0], item[1][0])
    ]);
}

function deduceTypeArith(lhs, rhs, ope){
    if(equalType(lhs[1], rhs[1]) )return lhs[1];
    return null;
}

function deduceTypeAssign(lhs, rhs){
    return equalType(lhs[1], rhs[1]);
}

type CVariable = [string, any];
type CParameter = CVariable[];
type CFunction = [string, number, any[]] // name, line, sign
type COperand = [Symbol, number];
const IRType = {
    '+': Symbol('+'),
    '-': Symbol('-'),
    '*': Symbol('*'),
    '/': Symbol('/'),
    '&': Symbol('&'),
    '|': Symbol('|'),
    '=': Symbol('='),
    'deref' : Symbol('deref'),
    'getaddr' : Symbol('getaddr'),
    'store' : Symbol('store'),
    'param' : Symbol('param'),
    'call' : Symbol('call')
};

function getName(sym){
    return sym.toString().split('(')[1].split(')')[0]
}


export class IRGenerator{
    result: [Symbol, number, COperand, COperand][];
    functionTable: Map<string, CFunction>; // name => Function,
    currentFunction: CFunction;
    localSymbolMap: Map<string, [number, any]>;
    localSymbolMapReverse: Map<number, string>;

    allocVarNow: number;

    errors: [number,string][];

    error(str, node){
        console.log(str);
        this.errors.push([1,str]);
    }

    printError(){
        this.errors.forEach(x => console.log(x[1]));
    }

    static findLineNumber(node){
        //TODO:: find line number
    }
    printCon(arr){
        if( arr[0] == ImmSymbol)return arr[1];
        else return this.localSymbolMapReverse.get(arr[1]);
    }

    allocLocalSpace(){
        this.localSymbolMapReverse.set(
            this.allocVarNow + 1,
            `t${this.allocVarNow + 1 - this.localSymbolMap.size}`
        );
        return ++this.allocVarNow;
    }

    print(start){
        for(let i = start; i < this.result.length; i ++){
            const item = this.result[i];
            if( item[0] == IRType['=']){
                console.log(`${this.printCon([VarSymbol,item[1]])} = ${this.printCon(item[2])}`);
            }
            else if( item[0] == IRType.store){
                console.log(`store ${this.printCon([VarSymbol,item[1]])}, ${this.printCon(item[2])}`);
            }
            else if( item[0] == IRType.deref || item[0] == IRType.getaddr){
                console.log(`${this.printCon([VarSymbol,item[1]])} = ${getName(item[0])} ${this.printCon(item[2])}`);

            }
            else{
                console.log(`${this.printCon([VarSymbol, item[1]])} = ${this.printCon(item[2])} ${getName(item[0])} ${this.printCon(item[3])}`);
            }
        }
    }



    __genFunctionCall(node){
        const func = this.functionTable.get(node);
        if( !func ) { this.error(`no such func`, node); return null;}
        const args = node[2].map( item => this.__genIR(item) );
        if( !equalType(func[2], args.map( item => item[1])){ this.error(`no call list`, node); return null;}
        for(let item of args){
            this.result.push([
                IRType.param,
                null,
                [item[0], item[2]],
                [null, null]
            ])
        }
        this.result.push([
            IRType.call,
            func[1],
            [ImmSymbol, args.length],
            [null, null]
        ]);
        console.log(node);
    }

    __genIR(node){
        if(!node.hasOwnProperty(NodeSymbol)) throw " fuck !!!";
        switch(node[NodeSymbol]){
            case NodeType.expression_statement:
                return this.__genIR(node[0]);
            case NodeType.statement:
            case NodeType.external_declaration:
            case NodeType.translation_unit:
                if( node.length == 1) this.__genIR(node[0]);
                else node.forEach(item => this.__genIR(item));
                return null;
            case NodeType.function_definition:
                if(this.currentFunction != null
                || node[1][1][1][0] != '('){
                    this.error("invalid function def.", node);
                }
                const param = resolveParameters(node[1][1][2]);
                this.currentFunction = [
                    node[1][1][0][0][0][0], //name
                    this.result.length,
                    funcPointer(
                        getType(node[0][0][0][0][0], node[1][0]),
                        param.map( item => item[1] )
                    )
                ];
                if(this.debug)
                    console.log(`function ${this.currentFunction[0]} at ${this.currentFunction[1]}`);
                this.localSymbolMap = new Map();
                this.localSymbolMapReverse = new Map();
                for(let index = 0; index < param.length; index ++){
                    const item = param[2][index];
                    if( this.localSymbolMap.has(item[0])){ this.error(`redefine variable ${item[0]}`,node); return null;}
                    this.localSymbolMap.set(item[0], [index, item[1]]);
                    this.localSymbolMapReverse.set(index, item[0]);
                }
                this.allocVarNow = this.localSymbolMap.size - 1;
                this.__genIR(node[2][1]); //decl
                this.__genIR(node[2][2]); //stmt
                if(this.debug){
                    console.log(this.currentFunction[0] + " : ");
                    this.print(this.currentFunction[1]);
                }
                this.currentFunction = null;
                break;
            case NodeType.declaration:
                for(let item of node){
                    const type = getType(item[0][0][0][0][0], item[1][0][0][0]);
                    const name = item[1][0][0][1][0][0][0];
                    if( this.localSymbolMap.has(name)){ this.error(`redefine variable ${name}`, node); return null;}
                    this.localSymbolMap.set(name, [++this.allocVarNow, type]);
                    this.localSymbolMapReverse.set(this.allocVarNow, name);
                    if(this.debug)console.log(`type :${toStringType(type)}, name: ${name}`);
                }
                break;
            case NodeType.assignment_expression:
                if(node.length == 0)return this.__genIR(node[0]);
                let storageFlag = null; const now = this.result.length;
                const lhs = this.__genIR(node[0]);
                if( lhs && this.result.length > now &&
                    this.result[this.result.length - 1][0] == IRType.deref){
                    storageFlag = this.result[this.result.length - 1][2][1];
                    this.result.pop();
                }
                const rhs = this.__genIR(node[2]);
                if( !rhs || lhs[0] != LeftSymbol){ this.error(`not left`, node); return null;}
                if( !deduceTypeAssign(lhs, rhs) ) { this.error(`type failed assignment`, node); return null;}
                //OPT:: direct-assignment
                const last = this.result[this.result.length-1];
                if(node[1][0][0] == '=' && rhs[0] != ImmSymbol && !storageFlag
                    && rhs[2] == last[1] && last[1] >= this.localSymbolMap.size){
                    last[1] = lhs[2];
                    return [VarSymbol, lhs[1] ,lhs[2]];
                }
                //OPT:: END
                if( storageFlag !== null ){
                    // like *a = ... ;
                    this.result.push([
                        IRType.store,
                        storageFlag,
                        [rhs[0], rhs[2]],
                        [null, null]
                    ]);
                    return [VarSymbol, rhs[1] ,rhs[2]];
                }
                this.result.push([
                    IRType[node[1][0][0]],
                    lhs[2],
                    [rhs[0], rhs[2]],
                    [null, null]
                ]);
                return [VarSymbol, lhs[1] ,lhs[2]];
            case NodeType.constant:
            case NodeType.cast_expression:
                if( node.length == 1)return this.__genIR(node[0]);
                else{
                    //TODO::
                    throw "1";
                }
            case NodeType.postfix_expression:
                if( node.length == 1)return this.__genIR(node[0]);
                switch( node[1][0] ){
                    case '(': return this.__genFunctionCall(node);
                    case '[':
                    case '->':
                    case '.':
                    case '++':
                    case '--':
                        throw "postfix"
                }
                throw "postfix";
            case NodeType.unary_expression:
                if( node.length == 1)return this.__genIR(node[0]);
                else if(node[0][NodeSymbol] == NodeType.unary_operator){
                    const rhs = this.__genIR(node[1]);
                    if( !rhs ) return null;
                    switch(node[0][0][0]){
                        case '*':
                            if( rhs[0] != ImmSymbol && isPointer(rhs[1])){
                                this.result.push([
                                    IRType.deref,
                                    this.allocLocalSpace(),
                                    [rhs[0], rhs[2]],
                                    [null, null]
                                ]);
                                return [LeftSymbol, rhs[1][0], this.allocVarNow];
                            }
                            else{ this.error("deref error", node); return null;}
                        case '&':
                            if( rhs[0] != ImmSymbol && rhs[2] < this.localSymbolMap.size){
                                this.result.push([
                                    IRType.getaddr,
                                    this.allocLocalSpace(),
                                    [rhs[0], rhs[2]],
                                    [null, null]
                                ]);
                                return [VarSymbol, pointerTo(rhs[1]), this.allocVarNow];
                            }
                            else{ this.error("getaddr error", node); return null;}
                        case '+':
                        case '-':
                        case '~':
                        case '!':
                            throw "1";
                    }
                }
                throw 12;
            case NodeType.expression:
                let ret = null;
                for(let item of node){
                    ret = this.__genIR(item);
                }
                return ret;
            case NodeType.primary_expression:
                if( node.length == 1)return this.__genIR(node[0]);
                else return this.__genIR(node[1]); // brace
            case NodeType.identifier:
                const funcVal = this.functionTable.get(node[0][0]);
                if( funcVal ){
                    return [FuncSymbol, funcVal[2], funcVal];
                }
                const val = this.localSymbolMap.get(node[0][0]);
                if(!val){ this.error("unsolved var", node); return null;}
                return [LeftSymbol, val[1], val[0]];
            case NodeType.integer_constant:
                return [ImmSymbol, IntType, parseInt(node[0][0])];
            case NodeType.conditional_expression:
            case NodeType.logical_or_expression:
            case NodeType.logical_and_expression:
            case NodeType.inclusive_or_expression:
            case NodeType.exclusive_or_expression:
            case NodeType.and_expression:
            case NodeType.equality_expression:
            case NodeType.relational_expression:
            case NodeType.shift_expression:
            case NodeType.additive_expression:
            case NodeType.multiplicative_expression:
                if( node.length == 1)return this.__genIR(node[0]);
                if( !IRType[node[1][0]])throw "fuck";
                const l = this.__genIR(node[0]);
                const r = this.__genIR(node[2]);
                if( !l || !r) { this.error("error expression", node); return null;}
                const resultType = deduceTypeArith(l,r, node[1]);
                if(!resultType){ this.error("type error", node); return null;}
                if( isIMM(l) && isIMM(r)) return [ImmSymbol, IntType, eval(`l[2]${node[1][0]}r[2]`)];
                const lt = isIMM(l) ? ImmSymbol : VarSymbol;
                const rt = isIMM(r) ? ImmSymbol : VarSymbol;
                this.result.push([
                    IRType[node[1][0]],
                    this.allocLocalSpace(),
                    [lt, l[2]],
                    [rt, r[2]]
                ]);
                return [VarSymbol, resultType, this.allocVarNow];
            default:
                console.log(`default: ${node[NodeSymbol].toString()}`);
                return null;
        }
    }
    debug: boolean;
    // ========
    constructor(debug = false){
        this.debug = debug;
        this.result = [];
        this.errors = [];
        this.functionTable = new Map();
        this.currentFunction = null;
    }
    generate(node){
        this.__genIR(node);
        this.printError();
    }
}

/*
    type := (imm, var) + type
    IR FORMAT
    [IRType, dst, src1, src2]
    ope FORMAT


 */

