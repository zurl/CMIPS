/**
 *  @file
 *  @author zcy <zurl@live.com>
 *  Created at 2017/2/24
 */

export interface Type{

}

export const IntType = Symbol("int");
export const PointerSymbol = Symbol("pointer");
export function PointerType(baseType){
    const result = [baseType];
    result[PointerSymbol] = true;
    return result;
}
