/**
 *  @file BNF Grammar Definition to TParser Definition Meta-Compielr
 *  @author zcy <zurl@live.com>
 *  Created at 10/30/2016
 */
"use strict";
exports.__esModule = true;
var tparser_1 = require("tparser");
var bnf_test_1 = require("./bnf.test");
function isArray(arr) {
    return Object.prototype.toString.call(arr) === "[object Array]";
}
function print(x) {
    if (isArray(x)) {
        return "[" + x.map(function (x) { return print(x); }).join(',') + "]";
    }
    else {
        return "" + x;
    }
}
var tokenizer = new tparser_1.Tokenizer({
    split: /\s*(<[a-z0-9-]+>|::=|\||\*|\{|\}|[^<>\s]+|\>|\<)\s*/y,
    $item: /^<[a-z0-9-]+>$/,
    $def: /^::=$/,
    $rep: /^\*$/,
    $repmore: /^\+$/,
    $optional: /^\?$/,
    $or: /^\|$/,
    $token: [/^.+$/, -1],
    $lcb: /^\{$/,
    $rcb: /^\}$/,
    $end: /^@end@$/
});
var OptionalSymbol = Symbol("optional");
var RepSymbol = Symbol("rep");
var RepMoreSymbol = Symbol("repmore");
var optionalNode = function (x) { x[OptionalSymbol] = 1; return x; };
var repNode = function (x) { x[RepSymbol] = 1; return x; };
var repmoreNode = function (x) { x[RepMoreSymbol] = 1; return x; };
var parser = new tparser_1.Parser({
    token: tokenizer.token(),
    tokenMap: tokenizer.tokenMap(),
    tokenUnit: function (_) { return [
        [[_.token.$token], function ($) { return $[0]; }],
        [[_.token.$item], function ($) { return $[0]; }],
        [[_.optionalTGC], function ($) { return $[0]; }],
        [[_.repmoreTGC], function ($) { return $[0]; }],
        [[_.repTGC], function ($) { return $[0]; }],
    ]; },
    tokenGroup: function (_) { return [
        [[_.tokenGroup, _.tokenUnit], function ($) { return $[0].concat([$[1]]); }],
        [[_.tokenUnit], function ($) { return [$[0]]; }],
    ]; },
    tokenGroupClosure: function (_) { return [
        [[_.token.$lcb, _.tokenGroup, _.token.$rcb], function ($) { return $[1]; }],
    ]; },
    repTGC: function (_) { return [
        [[_.tokenGroupClosure, _.token.$rep], function ($) { return repNode($[0]); }],
    ]; },
    repmoreTGC: function (_) { return [
        [[_.tokenGroupClosure, _.token.$repmore], function ($) { return repmoreNode($[0]); }],
    ]; },
    optionalTGC: function (_) { return [
        [[_.tokenGroupClosure, _.token.$optional], function ($) { return optionalNode($[0]); }],
    ]; },
    ruleUnit: function (_) { return [
        [[_.tokenGroup], function ($) { return $[0]; }],
    ]; },
    rule: function (_) { return [
        [[_.rule, _.token.$or, _.ruleUnit], function ($) { return $[0].concat([$[2]]); }],
        [[_.ruleUnit], function ($) { return [$[0]]; }],
    ]; },
    item: function (_) { return [
        [[_.token.$item, _.token.$def, _.rule, _.token.$end], function ($) { return [$[0], $[2]]; }],
    ]; },
    items: function (_) { return [
        [[_.items, _.item], function ($) { return $[0].concat([$[1]]); }],
        [[_.item], function ($) { return [$[0]]; }],
    ]; }
});
var _a = tokenizer.tokenize(bnf_test_1["default"]), token = _a[0], tokenType = _a[1], tokenLine = _a[2];
// ll3 grammar dealing
// insert @end@ at before 2 words ::=
var newtoken = [], newtokentype = [];
for (var i = 0; i <= token.length - 1; i++) {
    if (token[i + 1] == '::=' && i != 0) {
        newtoken.push('@end@');
        newtokentype.push(parser.tokenMap.get('$end'));
    }
    newtoken.push(token[i]);
    newtokentype.push(tokenType[i]);
}
newtoken.push('@end@');
newtokentype.push(parser.tokenMap.get('$end'));
var result = parser.parse([newtoken, newtokentype, tokenLine], 'items');
var exp = {};
var tokenHashMap = {};
var tokenHashNow = 0;
function getTokenHash(str) {
    if (tokenHashMap.hasOwnProperty(str))
        return tokenHashMap[str];
    else {
        if (/^[a-z]$/.test(str))
            tokenHashMap[str] = str;
        tokenHashMap[str] = "$symbol" + ++tokenHashNow;
        return tokenHashMap[str];
    }
}
// replace the invalid char in the expression name
// which can not use in Standard Javascript
function replaceInvalidChar(str) {
    if (str[0] == '<' && str[str.length - 1] == '>')
        return str.substring(1, str.length - 1).replace(/[^a-z]/g, '_');
    return str.replace(/[^a-z]/g, '_');
}
function convertToGrammarRule(str) {
    if (str[0] == '<' && str[str.length - 1] == '>')
        return "_." + replaceInvalidChar(str);
    else
        return "_.token." + getTokenHash(str);
}
result.forEach(function (item) {
    exp[replaceInvalidChar(item[0])] = [];
    item[1].forEach(function (rule) {
        var result = [];
        rule.forEach(function (token) {
            if (token.hasOwnProperty(OptionalSymbol)) {
                exp[replaceInvalidChar(token[0]) + "$o"] = ["[" + token.map(function (x) { return convertToGrammarRule(x); }).join(',') + "],$=>Node(NodeType." + replaceInvalidChar(token[0]) + ",$)", "[],$=>$"];
                result.push("_." + replaceInvalidChar(token[0]) + "$o");
            }
            else if (token.hasOwnProperty(RepSymbol)) {
                exp[replaceInvalidChar(token[0]) + "$r"] = ["[" + token.map(function (x) { return convertToGrammarRule(x); }).join(',') + "],$=>$", "[],$=>$"];
                exp[replaceInvalidChar(token[0]) + "$rs"] = ["[_." + replaceInvalidChar(token[0]) + "$r],$=>Node(NodeType." + replaceInvalidChar(token[0]) + ", $[0])",
                    "[_." + replaceInvalidChar(token[0]) + "$rs, _." + replaceInvalidChar(token[0]) + "$r],$=>Node(NodeType." + replaceInvalidChar(token[0]) + ",$[0].concat($[1]))"];
                result.push("_." + replaceInvalidChar(token[0]) + "$rs");
            }
            else if (token.hasOwnProperty(RepMoreSymbol)) {
                exp[replaceInvalidChar(token[0]) + "$m"] = ["[" + token.map(function (x) { return convertToGrammarRule(x); }).join(',') + "],$=>$"];
                exp[replaceInvalidChar(token[0]) + "$ms"] = ["[_." + replaceInvalidChar(token[0]) + "$m],$=>Node(NodeType." + replaceInvalidChar(token[0]) + ", $[0])",
                    "[_." + replaceInvalidChar(token[0]) + "$ms, _." + replaceInvalidChar(token[0]) + "$m],$=>Node(NodeType." + replaceInvalidChar(token[0]) + ",$[0].concat($[1]))"];
                result.push("_." + replaceInvalidChar(token[0]) + "$ms");
            }
            else {
                result.push(convertToGrammarRule(token));
            }
        });
        exp[replaceInvalidChar(item[0])].push("[" + result.join(',') + "],$=>Node(NodeType." + replaceInvalidChar(item[0]) + ", $)");
    });
});
function getRegDef(str) {
    return str
        .replace('@', '')
        .replace(/\+/g, '\\+')
        .replace(/\(/g, '\\(')
        .replace(/\|/g, '\\|')
        .replace(/\)/g, '\\)')
        .replace(/\?/g, '\\?')
        .replace(/\./g, '\\.')
        .replace(/\[/g, '\\[')
        .replace(/\*/g, '\\*')
        .replace(/\{/g, '\\{')
        .replace(/\//g, '\\/');
}
function getDefFile() {
    return "\nexport interface IMyTokenizer extends IAbstractTokenElements {\n" + Object.keys(tokenHashMap).map(function (x) { return "    " + tokenHashMap[x] + ": IToken;"; }).join('\n' +
        '') + "\n}\nexport interface IMyParser<T extends IAbstractTokenElements> extends IAbstractParserElements<T> {\n" + Object.keys(exp).map(function (x) { return "    " + x + ": ISymbol<IMyParser<T>>;"; }).join('\n') + "\n}\n";
}
function getTokenizer() {
    return "\nimport {IAbstractTokenElements,IToken,IAbstractParserElements,ISymbol} from 'tparser';\nimport {Parser, Tokenizer} from \"tparser\";\nconst tokenizer = new Tokenizer<IMyTokenizer>({\n    split: /s*s*/y,\n" + Object.keys(tokenHashMap).map(function (x) { return "    " + tokenHashMap[x] + ": /^" + getRegDef(x) + "$/,"; }).join('\n') + "\n});\n";
}
function getParser() {
    return "\nconst NodeSymbol = Symbol(\"Node\");\nfunction Node(type, array){\n     array[NodeSymbol] = type;\n     return array;\n}\nconst NodeType = {\n" + Object.keys(exp).map(function (item) { return "    " + item + ": Symbol(\"" + item + "\"),"; }).join('\n') + "\n};\nconst parser = new Parser<IMyTokenizer, IMyParser<IMyTokenizer>>({\n    token: tokenizer.token(),\n    tokenMap: tokenizer.tokenMap(),\n" + Object.keys(exp).map(function (item) { return "    " + item + ": _=>[\n" + exp[item].map(function (rule) { return "       [" + rule + "],"; }).join('\n') + '\n    ],'; }).join('\n') + "\n});\n";
}
console.log(getDefFile());
console.log(getTokenizer());
console.log(getParser());
