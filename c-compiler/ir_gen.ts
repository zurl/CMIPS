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


export class IRGenerator{
    result: any[];

    __genIR(node){
        if(!node.hasOwnProperty(NodeSymbol)) return;
        if( node.length == 1)return this.__genIR(node[0]);
        switch(node[NodeSymbol]){
            case NodeType.integer_constant:
                return [ImmSymbol, IntType, parseInt(node[0])];
            case NodeType.additive_expression:
                const l = this.__genIR(node[0]);
                const r = this.__genIR(node[2]);
                if( isIMM(l) && isIMM(r)) return [ImmSymbol, IntType, eval(`l[2]${node[1]}r[2]`)];
                break;
        }
    }

    // ========
    constructor(){
        this.result = [];
    }
    generate(node){

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

