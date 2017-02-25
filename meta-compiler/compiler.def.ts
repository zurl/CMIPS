/**
 *  @file
 *  @author zcy <zurl@live.com>
 *  Created at 11/4/2016
 */
/**
 *  @file
 *  @author zcy <zurl@live.com>
 *  Created at 11/1/2016
 */
import {IAbstractTokenElements,IToken,IAbstractParserElements,ISymbol} from 'tparser';

export interface IMyTokenizer extends IAbstractTokenElements {
    $item: IToken,
    $def: IToken,
    $rep: IToken,
    $token: IToken,
    $repmore: IToken,
    $optional: IToken,
    $or: IToken,
    $lcb : IToken,
    $rcb : IToken,
    $end : IToken
}

export interface IMyParser<T extends IAbstractTokenElements> extends IAbstractParserElements<T> {
    items:  ISymbol<IMyParser<T>>;
    item: ISymbol<IMyParser<T>>;
    tokenUnit : ISymbol<IMyParser<T>>;
    tokenGroup : ISymbol<IMyParser<T>>;
    tokenGroupClosure : ISymbol<IMyParser<T>>;
    repTGC : ISymbol<IMyParser<T>>;
    repmoreTGC : ISymbol<IMyParser<T>>;
    optionalTGC : ISymbol<IMyParser<T>>;
    ruleUnit : ISymbol<IMyParser<T>>;
    rule : ISymbol<IMyParser<T>>;
}