import {NodeSymbol, NodeType} from "./parser";
import {IntType} from "./type";
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


const ImmSymbol = Symbol("imm");
const VarSymbol = Symbol("var");
function isIMM(item){
    return item[0] == ImmSymbol;
}

function getType(name){
    if(name == "int")return IntType;
    return IntType;
}

function resolveParameters(node){
    return node.map(item=>[
        item[1][1][0][0][0],
        getType(item[0][0][0][0])
    ]);
}

type CVariable = [string, any];
type CParameter = CVariable[];
type CFuntion = [string, number, CParameter, any] // name, line, parameter, return

export class IRGenerator{
    result: any[];
    functionTable: Map<string, CFuntion>; // name => Function,
    currentFunction: CFuntion;
    localSymbolMap: Map<string, [number, any]>;

    errors: [number,string][];

    error(str, node){
        this.errors.push(str);
    }

    static findLineNumber(node){
        //TODO:: find line number
    }


    __genIR(node){
        if(!node.hasOwnProperty(NodeSymbol)) return;
        if( node.length == 1)return this.__genIR(node[0]);
        switch(node[NodeSymbol]){
            case NodeType.function_definition:
                if(this.currentFunction != null
                || node[1][1][1][0] != '('){
                    this.error("invalid function def.", node);
                }
                this.currentFunction = [
                    node[1][1][0][0][0][0], //name
                    this.result.length,
                    resolveParameters(node[1][1][2]),
                    getType(node[0][0][0][0][0])
                ];
                if(this.debug)
                    console.log(`function ${this.currentFunction[0]} at ${this.currentFunction[1]}`);
                this.localSymbolMap = new Map(this.currentFunction[2].map(
                    (item, index) : [string, [number, any]] =>
                        [item[0], [index, item[1]]]
                ));
                this.__genIR(node[2][1]); //decl
                this.__genIR(node[2][2]); //stmt
                break;
            case NodeType.declaration:
                for(let item of node){
                    const type = getType(item[0][0][0]);
                    const name = item[1][0][0][1][0][0][0];
                    if(this.debug)console.log(`type :${type.toString()}, name: ${name}`);
                }
                break;
            case NodeType.integer_constant:
                return [ImmSymbol, IntType, parseInt(node[0][0])];
            case NodeType.additive_expression:
                const l = this.__genIR(node[0]);
                const r = this.__genIR(node[2]);
                if( isIMM(l) && isIMM(r)) return [ImmSymbol, IntType, eval(`l[2]${node[1][0]}r[2]`)];
                break;
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
    }
}

const IRType = {
    '+' : Symbol('add'),
    '-' : Symbol('sub'),
};


/*
    type := (imm, var) + type
    IR FORMAT
    [IRType, dst, src1, src2]
    ope FORMAT


 */

