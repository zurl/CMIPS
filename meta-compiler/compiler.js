"use strict";
var tokenizer_1 = require("./tokenizer");
/**
 *  @file
 *  @author zcy <zurl@live.com>
 *  Created at 10/30/2016
 */
var tokenizer = new tokenizer_1.Tokenizer({
    split: /\s*(:|,|\(|\)|-?[0-9]+(\.[0-9]+)?|"[^"]*"|[$a-zA-Z0-9]+)\s*/y,
    $item: /^<.*>$/,
    $def: /^::=$/,
    $rep: /^*$/,
    $toekn: /^.+$/,
    $lcb: /^\{$/,
    $rcb: /^\}$/
});
/*
this.__parser = new Parser<IMyTokenizer, IMyParser<IMyTokenizer>>({
    token: tokenizer.token(),
    tokenMap: tokenizer.tokenMap(),
    command: _=>[
        [[_.flag],$=>[$[0],OnlyAFlag]],
        [[_.flag,_.body],$=>[$[0],$[1]]],
        [[_.body],$=>[null, $[0]]],
    ],
    flag: _=>[
        [[_.token.name,_.token.$colon],$=>$[0]]
    ],
    body: _=>[
        [[_.token.name,_.token.register, _.token.$comma,_.token.register,_.token.$comma,_.token.register]
            ,$=>buildAsmCommandRRR($[0],$[1],$[3],$[5])],   //op $1 $2 $3
        [[_.token.name,_.token.register,_.token.$comma,_.token.register,_.token.$comma,_.token.number]
            ,$=>buildAsmCommandRRN($[0],$[1],$[3],$[5])],   //op $1 $2 num
        [[_.token.name,_.token.register,_.token.$comma,_.token.register,_.token.$comma,_.token.name]
            ,$=>buildAsmCommandRRN($[0],$[3],$[1],hashString($[5]).toString())],   //op $1 $2 name
        [[_.token.name,_.token.register,_.token.$comma,_.token.number,_.token.$lp,_.token.register,_.token.$rp]
            ,$=>buildAsmCommandRRN($[0],$[1],$[5],$[3])],   //op $1 num($2)
        [[_.token.name,_.token.register,_.token.$comma,_.token.number]
            ,$=>buildAsmCommandRN($[0],$[1],$[3])],   //op $1 num
        [[_.token.name,_.token.register,_.token.$comma,_.token.name]
            ,$=>buildAsmCommandRN($[0],$[1],hashString($[3]).toString())],   //op $1 label
        [[_.token.name,_.token.number]
            ,$=>buildAsmCommandN($[0],$[1])],   //op num
        [[_.token.name,_.token.name]
            ,$=>buildAsmCommandN($[0],hashString($[1]).toString())],   //op num
        [[_.token.name,_.token.register, _.token.$comma,_.token.register]
            ,$=>buildAsmCommandRR($[0],$[1],$[3])],   //op $1 $2 $3
        [[_.token.name,_.token.register]
            ,$=>buildAsmCommandR($[0],$[1])],   //op reg

    ],
}, false, AsmParseErrorFlag);

 const tokenizer = new Tokenizer<IMyTokenizer>({
 split: /\s*(:|,|\(|\)|-?[0-9]+(\.[0-9]+)?|"[^"]*"|[$a-zA-Z0-9]+)\sy,
    integer: /^-?[0-9]+$/,
    float: /^-?[0-9]+\.[0-9]+$/,

    //symbol
    $add:/^\+$/,
    $sub:/^\-$/,
    $mul:/^\*$/,
    $div:/^\/$/,
    $and:/^\&$/,
    $or:/^\|$/,
    $xor:/^\^$/,
    $not:/^\!$/,
    $rev:/^\~$/,
    $comma:/^\~$/,
    $colon:/^\:$/,
    $point:/^\.$/,
    $assign_operator: /^(=|\^=|\&=|\|=|\+=|\-=|\*=|\/=)$/,
    $relational_operator: /^(==|\!=|\>=|\<=|\>|\<)$/,


    string: /^"[^"]*(\\"[^"]*)*"$/,

    $colon: /^:$/,
    $comma: /^,$/,
    $lp: /^\($/,
    $rp: /^\)$/,
});
 */ 
