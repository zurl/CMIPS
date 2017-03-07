import {IR, IRType, CFunction, ImmSymbol} from "./ir_gen";
import {
    buildAsmInstructionRRR, buildAsmInstructionRRN, buildAsmInstructionRN,
    buildAsmInstructionRR
} from "../mips/assembler/instruction";
/**
 *  @file
 *  @author zcy <zurl@live.com>
 *  Created at 2017/2/26
 */

/**
 *  Register Allocation Algorithm
 *  const Register = {
    "$zero": 0, "$at": 1, "$v1": 2, "$v2": 3,
    "$a0": 4, "$a1": 5, "$a2": 6, "$a3": 7,
    "$t0": 8, "$t1": 9, "$t2": 10, "$t3": 11, "$t4": 12, "$t5": 13, "$t6": 14, "$t7": 15,
    "$s0": 16, "$s1": 17, "$s2": 18, "$s3": 19, "$s4": 20, "$s5": 21, "$s6": 22, "$s7": 23,
    "$s8": 24, "$s9": 25, "$k0": 26, "$k1": 27,
    "$gp": 28, "$sp": 29, "$fp": 30, "$ra": 31,
}as LookupTable;

 *  $a0-$a4 argument ... else on stack
 *
 *  callee storage?
 */

export class MIPSGenerator{
    __programBuffer : ArrayBuffer;
    __program : DataView;
    __now : number;

    stack : Map<number, number>;
    staceSpace : number;
    constructor(){
        this.__programBuffer = new ArrayBuffer(1024 * 4);
        this.__program = new DataView(this.__programBuffer);
        this.__now = 0;
    }
    __insert(x){
        this.__program.setUint32(this.__now, x);
        this.__now += 4;
    }
    __mem(x){
        return this.stack.get(x);
    }
    __getImm(ins){
        let imm, sym;
        if (ins[2][0] == ImmSymbol) {
            imm = ins[2][1];
            sym = ins[3][1];
        }
        else {
            imm = ins[3][1];
            sym = ins[2][1];
        }
        return [imm, sym];
    }
    generate(functionTable : Map<string, CFunction>, ir: IR[]){
        for(let value of functionTable.values()){
            this.stack = value.stack;
            this.staceSpace = value.stackSpace;
            //this.__insert()
            for(let i = value.lineStart; i < value.lineEnd; i++){
                const ins = ir[i];
                switch(ins[0]){
                    case IRType.store:
                        if (ins[2][0] != ImmSymbol) {
                            this.__insert(buildAsmInstructionRRN('lw', '$t0', '$sp', this.__mem(ins[1])));
                            this.__insert(buildAsmInstructionRRN('lw', '$t1', '$sp', this.__mem(ins[2][1])));
                            this.__insert(buildAsmInstructionRRN('sw', '$t1', '$t0', 0));
                        }else{
                            this.__insert(buildAsmInstructionRRN('lw', '$t0', '$sp', this.__mem(ins[1])));
                            this.__insert(buildAsmInstructionRN('lui', '$t0', ins[2][1]));
                            this.__insert(buildAsmInstructionRRN('sw', '$t1', '$t0', 0));
                        }
                        break;
                    case IRType['=']:
                        if (ins[2][0] != ImmSymbol){
                            this.__insert(buildAsmInstructionRRN('lw', '$t0', '$sp', this.__mem(ins[2][1])));
                            this.__insert(buildAsmInstructionRRN('sw', '$t0', '$sp', this.__mem(ins[1])));
                        }
                        else{
                            this.__insert(buildAsmInstructionRN('lui', '$t0', ins[2][1]));
                            this.__insert(buildAsmInstructionRRN('sw', '$t0', '$sp', this.__mem(ins[1])));
                        }
                        break;
                    case IRType['*']:
                        if (ins[2][0] != ImmSymbol && ins[3][0] != ImmSymbol) {
                            this.__insert(buildAsmInstructionRRN('lw', '$t0', '$sp', this.__mem(ins[2][1])));
                            this.__insert(buildAsmInstructionRRN('lw', '$t1', '$sp', this.__mem(ins[3][1])));
                            this.__insert(buildAsmInstructionRR('mult', '$t0', '$t1'));
                            this.__insert(buildAsmInstructionRRN('sw', '$lo', '$sp', this.__mem(ins[1])));
                        }else{
                            let [imm, sym] = this.__getImm(ins);
                            this.__insert(buildAsmInstructionRRN('lw', '$t0', '$sp', this.__mem(sym)));
                            this.__insert(buildAsmInstructionRN('lui', '$t1', imm));
                            this.__insert(buildAsmInstructionRR('mult', '$t0', '$t1'));
                            this.__insert(buildAsmInstructionRRN('sw', '$lo', '$sp', this.__mem(ins[1])));
                        }
                        break;
                    case IRType['+']:
                        if(ins[2][0] != ImmSymbol && ins[3][0] != ImmSymbol){
                            this.__insert(buildAsmInstructionRRN('lw','$t0','$sp',this.__mem(ins[2][1])));
                            this.__insert(buildAsmInstructionRRN('lw','$t1','$sp',this.__mem(ins[3][1])));
                            this.__insert(buildAsmInstructionRRR('add','$t0','$t0','$t1'));
                            this.__insert(buildAsmInstructionRRN('sw','$t0','$sp',this.__mem(ins[1])));
                        }
                        else{
                            let [imm, sym] = this.__getImm(ins);
                            this.__insert(buildAsmInstructionRRN('lw','$t0','$sp',this.__mem(sym)));
                            this.__insert(buildAsmInstructionRRN('addi','$t0','$t0',imm));
                            this.__insert(buildAsmInstructionRRN('sw','$t0','$sp',this.__mem(ins[1])));
                        }
                }
            }
        }
    }
}

/*
    callee save;
    register allocation


    $a0-$a3 parameter
    localvari

caller:
    sb $t1,-1($bp)
caller:
    move $a0, xx;
    move $a1, xx;
    move $a2, xx;
    move $a3, xx;
    add $bp, $bp, ${stack_size}
    push ${return addr};
    j func;
    sub $bp, $bp, ${stack_size}
    //use $ra
 */