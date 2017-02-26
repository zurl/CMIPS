/**
 *  @file
 *  @author zcy <zurl@live.com>
 *  Created at 2017/2/24
 */

export interface Type{

}

export const IntType = Symbol("int");
export const PointerSymbol = Symbol("pointer");
export const VoidType = Symbol("void");
export const TypeSymbol = Symbol("type");
export const StructSymbol = Symbol("struct");

export function pointerTo(type){
    const result = [type];
    result[TypeSymbol] = PointerSymbol;
    return result;
}

function isArray(arr){
    return Object.prototype.toString.call(arr) === "[object Array]";
}

export function toStringType(type){
    if( isArray(type)) return type.map(item => toStringType(item)).join(',');
    else return type.toString();
}

export function equalType(lhs, rhs){
    if(isArray(lhs) && isArray(rhs)) return equalType(lhs[0], rhs[0]);
    if(isArray(lhs) || isArray(rhs)) return false;
    return lhs == rhs;
}

export function isPointer(x){
    return isArray(x) && x[TypeSymbol] == PointerSymbol;
}
