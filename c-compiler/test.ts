/**
 *  @file
 *  @author zcy <zurl@live.com>
 *  Created at 2017/3/7
 */

import testcode from './eg';
import {IRGenerator} from "./ir_gen";
import {NodeSymbol, tokenizer, parser} from "./parser";
import {MIPSGenerator} from "./mips_gen";
import {disassmble} from "../mips/assembler/disassmbler";
const token = tokenizer.tokenize(testcode);

const result = parser.parse(token, 'translation_unit');
function getSpace( deep ){
    let str = "";
    for(let i = 0; i < deep ;i++)str += "  ";
    return str;
}

for(let i = 0 ;i <= token[0].length; i++){
    //console.log(`${token[0][i]} : ${parser.tokenMapReverse.get(token[1][i])}`)
}

function isArray(arr){
    return Object.prototype.toString.call(arr) === "[object Array]";
}
function printResult(x, deep = 0){
    if( x.hasOwnProperty(NodeSymbol) ){
        //if(x.length == 1 && isArray(x[0]))
        //   return printResult(x[0], deep);
        return getSpace(deep) + x[NodeSymbol].toString() + " : \n" + x.map(x=>printResult(x, deep + 1)).join('\n');
    }else{
        return getSpace(deep) + `${x}\n`;
    }
}
//console.log(printResult(result));
const irGenerator = new IRGenerator(true);
irGenerator.generate(result);
const mipsGenerator = new MIPSGenerator();
mipsGenerator.generate(irGenerator.functionTable, irGenerator.result);
function addFrontZero(str: string){
    str ='000000000000'+str;
    return str.substring(str.length-8,str.length);
}

const program = mipsGenerator.__program;

for(let i = 0;i <= 50;  i ++){
    let x = program.getUint32(i * 4);
    console.log(`${addFrontZero((i * 4).toString(16))}:${addFrontZero(x.toString(16))}###`+disassmble(x));
}