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
export const FunctPtrSymbol = Symbol("func");

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
    if(isArray(lhs) && isArray(rhs)){
        if(lhs[TypeSymbol] != rhs[TypeSymbol]) return false;
        if(lhs[TypeSymbol] == PointerSymbol) return equalType(lhs[0], rhs[0]);
        if(lhs.length != rhs.length)return false;
        for(let i = 0; i < lhs.length;i ++ ){
            if( !equalType(lhs[i], rhs[i]))return false;
        }
        return true;
    }
    if(isArray(lhs) || isArray(rhs)) return false;
    return lhs == rhs;
}

export function isPointer(x){
    return isArray(x) && x[TypeSymbol] == PointerSymbol;
}

export function funcPointer( ret, args ){
    const result = [ret].concat(args);
    result[TypeSymbol] = FunctPtrSymbol;
    return result;
}


export function getTypeSize(x){
    if( isArray(x)){
        if( x[TypeSymbol] == FunctPtrSymbol) return 4;
        else if( x[TypeSymbol] == PointerSymbol) return 4;
        else return 0;
    }else{
        if( x== IntType) return 4;
        return 4;
    }
}