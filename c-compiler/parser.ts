

export interface IMyTokenizer extends IAbstractTokenElements {
    $symbol1: IToken;
    $symbol2: IToken;
    $symbol3: IToken;
    $symbol4: IToken;
    $symbol5: IToken;
    $symbol6: IToken;
    $symbol7: IToken;
    $symbol8: IToken;
    $symbol9: IToken;
    $symbol10: IToken;
    $symbol11: IToken;
    $symbol12: IToken;
    $symbol13: IToken;
    $symbol14: IToken;
    $symbol15: IToken;
    $symbol16: IToken;
    $symbol17: IToken;
    $symbol18: IToken;
    $symbol19: IToken;
    $symbol20: IToken;
    $symbol21: IToken;
    $symbol22: IToken;
    $symbol23: IToken;
    $symbol24: IToken;
    $symbol25: IToken;
    $symbol26: IToken;
    $symbol27: IToken;
    $symbol28: IToken;
    $symbol29: IToken;
    $symbol30: IToken;
    $symbol31: IToken;
    $symbol32: IToken;
    $symbol33: IToken;
    $symbol34: IToken;
    $symbol35: IToken;
    $symbol36: IToken;
    $symbol37: IToken;
    $symbol38: IToken;
    $symbol39: IToken;
    $symbol40: IToken;
    $symbol41: IToken;
    $symbol42: IToken;
    $symbol43: IToken;
    $symbol44: IToken;
    $symbol45: IToken;
    $symbol46: IToken;
    $symbol47: IToken;
    $symbol48: IToken;
    $symbol49: IToken;
    $symbol50: IToken;
    $symbol51: IToken;
    $symbol52: IToken;
    $symbol53: IToken;
    $symbol54: IToken;
    $symbol55: IToken;
    $symbol56: IToken;
    $symbol57: IToken;
    $symbol58: IToken;
    $symbol59: IToken;
    $symbol60: IToken;
    $symbol61: IToken;
    $symbol62: IToken;
    $symbol63: IToken;
    $symbol64: IToken;
    $symbol65: IToken;
    $symbol66: IToken;
    $symbol67: IToken;
    $symbol68: IToken;
    $symbol69: IToken;
    $symbol70: IToken;
    $symbol71: IToken;
    $symbol72: IToken;
    $symbol73: IToken;
    $symbol74: IToken;
}
export interface IMyParser<T extends IAbstractTokenElements> extends IAbstractParserElements<T> {
    identifier: ISymbol<IMyParser<T>>;
    string: ISymbol<IMyParser<T>>;
    character_constant: ISymbol<IMyParser<T>>;
    integer_constant: ISymbol<IMyParser<T>>;
    floating_constant: ISymbol<IMyParser<T>>;
    translation_unit: ISymbol<IMyParser<T>>;
    external_declaration$r: ISymbol<IMyParser<T>>;
    external_declaration$rs: ISymbol<IMyParser<T>>;
    external_declaration: ISymbol<IMyParser<T>>;
    function_definition: ISymbol<IMyParser<T>>;
    declaration_specifier$r: ISymbol<IMyParser<T>>;
    declaration_specifier$rs: ISymbol<IMyParser<T>>;
    declaration_specifier: ISymbol<IMyParser<T>>;
    storage_class_specifier: ISymbol<IMyParser<T>>;
    type_specifier: ISymbol<IMyParser<T>>;
    struct_or_union_specifier: ISymbol<IMyParser<T>>;
    struct_declaration$m: ISymbol<IMyParser<T>>;
    struct_declaration$ms: ISymbol<IMyParser<T>>;
    struct_or_union: ISymbol<IMyParser<T>>;
    struct_declaration: ISymbol<IMyParser<T>>;
    specifier_qualifier$r: ISymbol<IMyParser<T>>;
    specifier_qualifier$rs: ISymbol<IMyParser<T>>;
    specifier_qualifier: ISymbol<IMyParser<T>>;
    struct_declarator_list: ISymbol<IMyParser<T>>;
    struct_declarator: ISymbol<IMyParser<T>>;
    declarator: ISymbol<IMyParser<T>>;
    pointer$o: ISymbol<IMyParser<T>>;
    pointer: ISymbol<IMyParser<T>>;
    type_qualifier$r: ISymbol<IMyParser<T>>;
    type_qualifier$rs: ISymbol<IMyParser<T>>;
    type_qualifier: ISymbol<IMyParser<T>>;
    direct_declarator: ISymbol<IMyParser<T>>;
    constant_expression$o: ISymbol<IMyParser<T>>;
    identifier$r: ISymbol<IMyParser<T>>;
    identifier$rs: ISymbol<IMyParser<T>>;
    constant_expression: ISymbol<IMyParser<T>>;
    conditional_expression: ISymbol<IMyParser<T>>;
    logical_or_expression: ISymbol<IMyParser<T>>;
    logical_and_expression: ISymbol<IMyParser<T>>;
    inclusive_or_expression: ISymbol<IMyParser<T>>;
    exclusive_or_expression: ISymbol<IMyParser<T>>;
    and_expression: ISymbol<IMyParser<T>>;
    equality_expression: ISymbol<IMyParser<T>>;
    relational_expression: ISymbol<IMyParser<T>>;
    shift_expression: ISymbol<IMyParser<T>>;
    additive_expression: ISymbol<IMyParser<T>>;
    multiplicative_expression: ISymbol<IMyParser<T>>;
    cast_expression: ISymbol<IMyParser<T>>;
    unary_expression: ISymbol<IMyParser<T>>;
    postfix_expression: ISymbol<IMyParser<T>>;
    primary_expression: ISymbol<IMyParser<T>>;
    constant: ISymbol<IMyParser<T>>;
    expression: ISymbol<IMyParser<T>>;
    assignment_expression: ISymbol<IMyParser<T>>;
    assignment_operator: ISymbol<IMyParser<T>>;
    unary_operator: ISymbol<IMyParser<T>>;
    type_name: ISymbol<IMyParser<T>>;
    specifier_qualifier$m: ISymbol<IMyParser<T>>;
    specifier_qualifier$ms: ISymbol<IMyParser<T>>;
    abstract_declarator$o: ISymbol<IMyParser<T>>;
    parameter_list: ISymbol<IMyParser<T>>;
    parameter_declaration: ISymbol<IMyParser<T>>;
    declaration_specifier$m: ISymbol<IMyParser<T>>;
    declaration_specifier$ms: ISymbol<IMyParser<T>>;
    abstract_declarator: ISymbol<IMyParser<T>>;
    direct_abstract_declarator: ISymbol<IMyParser<T>>;
    parameter_list$o: ISymbol<IMyParser<T>>;
    declaration: ISymbol<IMyParser<T>>;
    init_declarator$r: ISymbol<IMyParser<T>>;
    init_declarator$rs: ISymbol<IMyParser<T>>;
    init_declarator: ISymbol<IMyParser<T>>;
    initializer: ISymbol<IMyParser<T>>;
    initializer_list: ISymbol<IMyParser<T>>;
    compound_statement: ISymbol<IMyParser<T>>;
    declaration$r: ISymbol<IMyParser<T>>;
    declaration$rs: ISymbol<IMyParser<T>>;
    statement$r: ISymbol<IMyParser<T>>;
    statement$rs: ISymbol<IMyParser<T>>;
    statement: ISymbol<IMyParser<T>>;
    labeled_statement: ISymbol<IMyParser<T>>;
    expression_statement: ISymbol<IMyParser<T>>;
    expression$o: ISymbol<IMyParser<T>>;
    selection_statement: ISymbol<IMyParser<T>>;
    iteration_statement: ISymbol<IMyParser<T>>;
    jump_statement: ISymbol<IMyParser<T>>;
}

import {IAbstractTokenElements,IToken,IAbstractParserElements,ISymbol} from 'tparser';
import {Parser, Tokenizer} from "tparser";
const tokenizer = new Tokenizer<IMyTokenizer>({
    split: /\s*([a-zA-Z_][a-zA-Z0-9_]*|-?[0-9]+(\.[0-9]*)?|\,|\;|\+|\%|\-|\*|\/|=|\+=|\-=|\/=|\*=|\||\&|\^|\(|\)|\]|\]|\{|\})\s*/y,
    $symbol1: [/^[a-zA-Z_][a-zA-Z0-9_]*$/, -1],
    $symbol2: /^".*"$/,
    $symbol3: /^'.*'$/,
    $symbol4: /^-?[0-9]+$/,
    $symbol5: /^-?[0-9]+.[0-9]+$/,
    $symbol6: /^auto$/,
    $symbol7: /^register$/,
    $symbol8: /^static$/,
    $symbol9: /^extern$/,
    $symbol10: /^typedef$/,
    $symbol11: /^void$/,
    $symbol12: /^char$/,
    $symbol13: /^short$/,
    $symbol14: /^int$/,
    $symbol15: /^long$/,
    $symbol16: /^float$/,
    $symbol17: /^double$/,
    $symbol18: /^signed$/,
    $symbol19: /^unsigned$/,
    $symbol20: /^\{$/,
    $symbol21: /^}$/,
    $symbol22: /^struct$/,
    $symbol23: /^union$/,
    $symbol24: /^,$/,
    $symbol25: /^:$/,
    $symbol26: /^\*$/,
    $symbol27: /^const$/,
    $symbol28: /^volatile$/,
    $symbol29: /^\($/,
    $symbol30: /^\)$/,
    $symbol31: /^\[$/,
    $symbol32: /^]$/,
    $symbol33: /^\?$/,
    $symbol34: /^\|\|$/,
    $symbol35: /^&&$/,
    $symbol36: /^\|$/,
    $symbol37: /^^$/,
    $symbol38: /^&$/,
    $symbol39: /^==$/,
    $symbol40: /^!=$/,
    $symbol41: /^<$/,
    $symbol42: /^>$/,
    $symbol43: /^=$/,
    $symbol44: /^\+$/,
    $symbol45: /^-$/,
    $symbol46: /^\/$/,
    $symbol47: /^%$/,
    $symbol48: /^\+\+$/,
    $symbol49: /^--$/,
    $symbol50: /^sizeof$/,
    $symbol51: /^\.$/,
    $symbol52: /^;$/,
    $symbol53: /^\*=$/,
    $symbol54: /^\/=$/,
    $symbol55: /^%=$/,
    $symbol56: /^\+=$/,
    $symbol57: /^-=$/,
    $symbol58: /^&=$/,
    $symbol59: /^^=$/,
    $symbol60: /^\|=$/,
    $symbol61: /^~$/,
    $symbol62: /^!$/,
    $symbol63: /^case$/,
    $symbol64: /^default$/,
    $symbol65: /^if$/,
    $symbol66: /^else$/,
    $symbol67: /^switch$/,
    $symbol68: /^while$/,
    $symbol69: /^do$/,
    $symbol70: /^for$/,
    $symbol71: /^goto$/,
    $symbol72: /^continue$/,
    $symbol73: /^break$/,
    $symbol74: /^return$/,
});

export const NodeSymbol = Symbol("Node");
function Node(type, array){
    array[NodeSymbol] = type;
    return array;
}
export const NodeType = {
    identifier: Symbol("identifier"),
    string: Symbol("string"),
    character_constant: Symbol("character_constant"),
    integer_constant: Symbol("integer_constant"),
    floating_constant: Symbol("floating_constant"),
    translation_unit: Symbol("translation_unit"),
    external_declaration$r: Symbol("external_declaration$r"),
    external_declaration$rs: Symbol("external_declaration$rs"),
    external_declaration: Symbol("external_declaration"),
    function_definition: Symbol("function_definition"),
    declaration_specifier$r: Symbol("declaration_specifier$r"),
    declaration_specifier$rs: Symbol("declaration_specifier$rs"),
    declaration_specifier: Symbol("declaration_specifier"),
    storage_class_specifier: Symbol("storage_class_specifier"),
    type_specifier: Symbol("type_specifier"),
    struct_or_union_specifier: Symbol("struct_or_union_specifier"),
    struct_declaration$m: Symbol("struct_declaration$m"),
    struct_declaration$ms: Symbol("struct_declaration$ms"),
    struct_or_union: Symbol("struct_or_union"),
    struct_declaration: Symbol("struct_declaration"),
    specifier_qualifier$r: Symbol("specifier_qualifier$r"),
    specifier_qualifier$rs: Symbol("specifier_qualifier$rs"),
    specifier_qualifier: Symbol("specifier_qualifier"),
    struct_declarator_list: Symbol("struct_declarator_list"),
    struct_declarator: Symbol("struct_declarator"),
    declarator: Symbol("declarator"),
    pointer$o: Symbol("pointer$o"),
    pointer: Symbol("pointer"),
    type_qualifier$r: Symbol("type_qualifier$r"),
    type_qualifier$rs: Symbol("type_qualifier$rs"),
    type_qualifier: Symbol("type_qualifier"),
    direct_declarator: Symbol("direct_declarator"),
    constant_expression$o: Symbol("constant_expression$o"),
    identifier$r: Symbol("identifier$r"),
    identifier$rs: Symbol("identifier$rs"),
    constant_expression: Symbol("constant_expression"),
    conditional_expression: Symbol("conditional_expression"),
    logical_or_expression: Symbol("logical_or_expression"),
    logical_and_expression: Symbol("logical_and_expression"),
    inclusive_or_expression: Symbol("inclusive_or_expression"),
    exclusive_or_expression: Symbol("exclusive_or_expression"),
    and_expression: Symbol("and_expression"),
    equality_expression: Symbol("equality_expression"),
    relational_expression: Symbol("relational_expression"),
    shift_expression: Symbol("shift_expression"),
    additive_expression: Symbol("additive_expression"),
    multiplicative_expression: Symbol("multiplicative_expression"),
    cast_expression: Symbol("cast_expression"),
    unary_expression: Symbol("unary_expression"),
    postfix_expression: Symbol("postfix_expression"),
    primary_expression: Symbol("primary_expression"),
    constant: Symbol("constant"),
    expression: Symbol("expression"),
    assignment_expression: Symbol("assignment_expression"),
    assignment_operator: Symbol("assignment_operator"),
    unary_operator: Symbol("unary_operator"),
    type_name: Symbol("type_name"),
    specifier_qualifier$m: Symbol("specifier_qualifier$m"),
    specifier_qualifier$ms: Symbol("specifier_qualifier$ms"),
    abstract_declarator$o: Symbol("abstract_declarator$o"),
    parameter_list: Symbol("parameter_list"),
    parameter_declaration: Symbol("parameter_declaration"),
    declaration_specifier$m: Symbol("declaration_specifier$m"),
    declaration_specifier$ms: Symbol("declaration_specifier$ms"),
    abstract_declarator: Symbol("abstract_declarator"),
    direct_abstract_declarator: Symbol("direct_abstract_declarator"),
    parameter_list$o: Symbol("parameter_list$o"),
    declaration: Symbol("declaration"),
    init_declarator$r: Symbol("init_declarator$r"),
    init_declarator$rs: Symbol("init_declarator$rs"),
    init_declarator: Symbol("init_declarator"),
    initializer: Symbol("initializer"),
    initializer_list: Symbol("initializer_list"),
    compound_statement: Symbol("compound_statement"),
    declaration$r: Symbol("declaration$r"),
    declaration$rs: Symbol("declaration$rs"),
    statement$r: Symbol("statement$r"),
    statement$rs: Symbol("statement$rs"),
    statement: Symbol("statement"),
    labeled_statement: Symbol("labeled_statement"),
    expression_statement: Symbol("expression_statement"),
    expression$o: Symbol("expression$o"),
    selection_statement: Symbol("selection_statement"),
    iteration_statement: Symbol("iteration_statement"),
    jump_statement: Symbol("jump_statement"),
};
const parser = new Parser<IMyTokenizer, IMyParser<IMyTokenizer>>({
    token: tokenizer.token(),
    tokenMap: tokenizer.tokenMap(),
    identifier: _=>[
        [[_.token.$symbol1],$=>Node(NodeType.identifier, $)],
    ],
    string: _=>[
        [[_.token.$symbol2],$=>Node(NodeType.string, $)],
    ],
    character_constant: _=>[
        [[_.token.$symbol3],$=>Node(NodeType.character_constant, $)],
    ],
    integer_constant: _=>[
        [[_.token.$symbol4],$=>Node(NodeType.integer_constant, $)],
    ],
    floating_constant: _=>[
        [[_.token.$symbol5],$=>Node(NodeType.floating_constant, $)],
    ],
    translation_unit: _=>[
        [[_.external_declaration$rs],$=>Node(NodeType.translation_unit, $)],
    ],
    external_declaration$r: _=>[
        [[_.external_declaration],$=>$],
        [[],$=>$],
    ],
    external_declaration$rs: _=>[
        [[_.external_declaration$r],$=>Node(NodeType.external_declaration, $[0])],
        [[_.external_declaration$rs, _.external_declaration$r],$=>Node(NodeType.external_declaration,$[0].concat($[1]))],
    ],
    external_declaration: _=>[
        [[_.function_definition],$=>Node(NodeType.external_declaration, $)],
        [[_.declaration],$=>Node(NodeType.external_declaration, $)],
    ],
    function_definition: _=>[
        [[_.declaration_specifier$rs,_.declarator,_.compound_statement],$=>Node(NodeType.function_definition, $)],
    ],
    declaration_specifier$r: _=>[
        [[_.declaration_specifier],$=>$],
        [[],$=>$],
    ],
    declaration_specifier$rs: _=>[
        [[_.declaration_specifier$r],$=>Node(NodeType.declaration_specifier, $[0])],
        [[_.declaration_specifier$rs, _.declaration_specifier$r],$=>Node(NodeType.declaration_specifier,$[0].concat($[1]))],
    ],
    declaration_specifier: _=>[
        [[_.storage_class_specifier],$=>Node(NodeType.declaration_specifier, $)],
        [[_.type_specifier],$=>Node(NodeType.declaration_specifier, $)],
        [[_.type_qualifier],$=>Node(NodeType.declaration_specifier, $)],
    ],
    storage_class_specifier: _=>[
        [[_.token.$symbol6],$=>Node(NodeType.storage_class_specifier, $)],
        [[_.token.$symbol7],$=>Node(NodeType.storage_class_specifier, $)],
        [[_.token.$symbol8],$=>Node(NodeType.storage_class_specifier, $)],
        [[_.token.$symbol9],$=>Node(NodeType.storage_class_specifier, $)],
        [[_.token.$symbol10],$=>Node(NodeType.storage_class_specifier, $)],
    ],
    type_specifier: _=>[
        [[_.token.$symbol11],$=>Node(NodeType.type_specifier, $)],
        [[_.token.$symbol12],$=>Node(NodeType.type_specifier, $)],
        [[_.token.$symbol13],$=>Node(NodeType.type_specifier, $)],
        [[_.token.$symbol14],$=>Node(NodeType.type_specifier, $)],
        [[_.token.$symbol15],$=>Node(NodeType.type_specifier, $)],
        [[_.token.$symbol16],$=>Node(NodeType.type_specifier, $)],
        [[_.token.$symbol17],$=>Node(NodeType.type_specifier, $)],
        [[_.token.$symbol18],$=>Node(NodeType.type_specifier, $)],
        [[_.token.$symbol19],$=>Node(NodeType.type_specifier, $)],
        [[_.struct_or_union_specifier],$=>Node(NodeType.type_specifier, $)],
    ],
    struct_or_union_specifier: _=>[
        [[_.struct_or_union,_.identifier,_.token.$symbol20,_.struct_declaration$ms,_.token.$symbol21],$=>Node(NodeType.struct_or_union_specifier, $)],
        [[_.struct_or_union,_.token.$symbol20,_.struct_declaration$ms,_.token.$symbol21],$=>Node(NodeType.struct_or_union_specifier, $)],
        [[_.struct_or_union,_.identifier],$=>Node(NodeType.struct_or_union_specifier, $)],
    ],
    struct_declaration$m: _=>[
        [[_.struct_declaration],$=>$],
    ],
    struct_declaration$ms: _=>[
        [[_.struct_declaration$m],$=>Node(NodeType.struct_declaration, $[0])],
        [[_.struct_declaration$ms, _.struct_declaration$m],$=>Node(NodeType.struct_declaration,$[0].concat($[1]))],
    ],
    struct_or_union: _=>[
        [[_.token.$symbol22],$=>Node(NodeType.struct_or_union, $)],
        [[_.token.$symbol23],$=>Node(NodeType.struct_or_union, $)],
    ],
    struct_declaration: _=>[
        [[_.specifier_qualifier$rs,_.struct_declarator_list],$=>Node(NodeType.struct_declaration, $)],
    ],
    specifier_qualifier$r: _=>[
        [[_.specifier_qualifier],$=>$],
        [[],$=>$],
    ],
    specifier_qualifier$rs: _=>[
        [[_.specifier_qualifier$r],$=>Node(NodeType.specifier_qualifier, $[0])],
        [[_.specifier_qualifier$rs, _.specifier_qualifier$r],$=>Node(NodeType.specifier_qualifier,$[0].concat($[1]))],
    ],
    specifier_qualifier: _=>[
        [[_.type_specifier],$=>Node(NodeType.specifier_qualifier, $)],
        [[_.type_qualifier],$=>Node(NodeType.specifier_qualifier, $)],
    ],
    struct_declarator_list: _=>[
        [[_.struct_declarator],$=>Node(NodeType.struct_declarator_list, $)],
        [[_.struct_declarator_list,_.token.$symbol24,_.struct_declarator],$=>Node(NodeType.struct_declarator_list, $)],
    ],
    struct_declarator: _=>[
        [[_.declarator],$=>Node(NodeType.struct_declarator, $)],
        [[_.declarator,_.token.$symbol25,_.constant_expression],$=>Node(NodeType.struct_declarator, $)],
        [[_.token.$symbol25,_.constant_expression],$=>Node(NodeType.struct_declarator, $)],
    ],
    declarator: _=>[
        [[_.pointer$o,_.direct_declarator],$=>Node(NodeType.declarator, $)],
    ],
    pointer$o: _=>[
        [[_.pointer],$=>Node(NodeType.pointer,$[0])],
        [[],$=>Node(NodeType.pointer,[])],
    ],
    pointer: _=>[
        [[_.token.$symbol26,_.type_qualifier$rs,_.pointer$o],$=>Node(NodeType.pointer, $[2].concat([$[1]]))],
    ],
    type_qualifier$r: _=>[
        [[_.type_qualifier],$=>$],
        [[],$=>$],
    ],
    type_qualifier$rs: _=>[
        [[_.type_qualifier$r],$=>Node(NodeType.type_qualifier, $[0])],
        [[_.type_qualifier$rs, _.type_qualifier$r],$=>Node(NodeType.type_qualifier,$[0].concat($[1]))],
    ],
    type_qualifier: _=>[
        [[_.token.$symbol27],$=>Node(NodeType.type_qualifier, $)],
        [[_.token.$symbol28],$=>Node(NodeType.type_qualifier, $)],
    ],
    direct_declarator: _=>[
        [[_.identifier],$=>Node(NodeType.direct_declarator, $)],
        [[_.token.$symbol29,_.declarator,_.token.$symbol30],$=>Node(NodeType.direct_declarator, $)],
        [[_.direct_declarator,_.token.$symbol31,_.constant_expression$o,_.token.$symbol32],$=>Node(NodeType.direct_declarator, $)],
        [[_.direct_declarator,_.token.$symbol29,_.parameter_list,_.token.$symbol30],$=>Node(NodeType.direct_declarator, $)],
        [[_.direct_declarator,_.token.$symbol29,_.identifier$rs,_.token.$symbol30],$=>Node(NodeType.direct_declarator, $)],
    ],
    constant_expression$o: _=>[
        [[_.constant_expression],$=>Node(NodeType.constant_expression,$)],
        [[],$=>$],
    ],
    identifier$r: _=>[
        [[_.identifier],$=>$],
        [[],$=>$],
    ],
    identifier$rs: _=>[
        [[_.identifier$r],$=>Node(NodeType.identifier, $[0])],
        [[_.identifier$rs, _.identifier$r],$=>Node(NodeType.identifier,$[0].concat($[1]))],
    ],
    constant_expression: _=>[
        [[_.conditional_expression],$=>Node(NodeType.constant_expression, $)],
    ],
    conditional_expression: _=>[
        [[_.logical_or_expression],$=>Node(NodeType.conditional_expression, $)],
        [[_.logical_or_expression,_.token.$symbol33,_.expression,_.token.$symbol25,_.conditional_expression],$=>Node(NodeType.conditional_expression, $)],
    ],
    logical_or_expression: _=>[
        [[_.logical_and_expression],$=>Node(NodeType.logical_or_expression, $)],
        [[_.logical_or_expression,_.token.$symbol34,_.logical_and_expression],$=>Node(NodeType.logical_or_expression, $)],
    ],
    logical_and_expression: _=>[
        [[_.inclusive_or_expression],$=>Node(NodeType.logical_and_expression, $)],
        [[_.logical_and_expression,_.token.$symbol35,_.inclusive_or_expression],$=>Node(NodeType.logical_and_expression, $)],
    ],
    inclusive_or_expression: _=>[
        [[_.exclusive_or_expression],$=>Node(NodeType.inclusive_or_expression, $)],
        [[_.inclusive_or_expression,_.token.$symbol36,_.exclusive_or_expression],$=>Node(NodeType.inclusive_or_expression, $)],
    ],
    exclusive_or_expression: _=>[
        [[_.and_expression],$=>Node(NodeType.exclusive_or_expression, $)],
        [[_.exclusive_or_expression,_.token.$symbol37,_.and_expression],$=>Node(NodeType.exclusive_or_expression, $)],
    ],
    and_expression: _=>[
        [[_.equality_expression],$=>Node(NodeType.and_expression, $)],
        [[_.and_expression,_.token.$symbol38,_.equality_expression],$=>Node(NodeType.and_expression, $)],
    ],
    equality_expression: _=>[
        [[_.relational_expression],$=>Node(NodeType.equality_expression, $)],
        [[_.equality_expression,_.token.$symbol39,_.relational_expression],$=>Node(NodeType.equality_expression, $)],
        [[_.equality_expression,_.token.$symbol40,_.relational_expression],$=>Node(NodeType.equality_expression, $)],
    ],
    relational_expression: _=>[
        [[_.shift_expression],$=>Node(NodeType.relational_expression, $)],
        [[_.relational_expression,_.token.$symbol41,_.shift_expression],$=>Node(NodeType.relational_expression, $)],
        [[_.relational_expression,_.token.$symbol42,_.shift_expression],$=>Node(NodeType.relational_expression, $)],
        [[_.relational_expression,_.token.$symbol41,_.token.$symbol43,_.shift_expression],$=>Node(NodeType.relational_expression, $)],
        [[_.relational_expression,_.token.$symbol42,_.token.$symbol43,_.shift_expression],$=>Node(NodeType.relational_expression, $)],
    ],
    shift_expression: _=>[
        [[_.additive_expression],$=>Node(NodeType.shift_expression, $)],
        [[_.shift_expression,_.token.$symbol41,_.token.$symbol41,_.additive_expression],$=>Node(NodeType.shift_expression, $)],
        [[_.shift_expression,_.token.$symbol42,_.token.$symbol42,_.additive_expression],$=>Node(NodeType.shift_expression, $)],
    ],
    additive_expression: _=>[
        [[_.multiplicative_expression],$=>Node(NodeType.additive_expression, $)],
        [[_.additive_expression,_.token.$symbol44,_.multiplicative_expression],$=>Node(NodeType.additive_expression, $)],
        [[_.additive_expression,_.token.$symbol45,_.multiplicative_expression],$=>Node(NodeType.additive_expression, $)],
    ],
    multiplicative_expression: _=>[
        [[_.cast_expression],$=>Node(NodeType.multiplicative_expression, $)],
        [[_.multiplicative_expression,_.token.$symbol26,_.cast_expression],$=>Node(NodeType.multiplicative_expression, $)],
        [[_.multiplicative_expression,_.token.$symbol46,_.cast_expression],$=>Node(NodeType.multiplicative_expression, $)],
        [[_.multiplicative_expression,_.token.$symbol47,_.cast_expression],$=>Node(NodeType.multiplicative_expression, $)],
    ],
    cast_expression: _=>[
        [[_.unary_expression],$=>Node(NodeType.cast_expression, $)],
        [[_.token.$symbol29,_.type_name,_.token.$symbol30,_.cast_expression],$=>Node(NodeType.cast_expression, $)],
    ],
    unary_expression: _=>[
        [[_.postfix_expression],$=>Node(NodeType.unary_expression, $)],
        [[_.token.$symbol48,_.unary_expression],$=>Node(NodeType.unary_expression, $)],
        [[_.token.$symbol49,_.unary_expression],$=>Node(NodeType.unary_expression, $)],
        [[_.unary_operator,_.cast_expression],$=>Node(NodeType.unary_expression, $)],
        [[_.token.$symbol50,_.unary_expression],$=>Node(NodeType.unary_expression, $)],
        [[_.token.$symbol50,_.type_name],$=>Node(NodeType.unary_expression, $)],
    ],
    postfix_expression: _=>[
        [[_.primary_expression],$=>Node(NodeType.postfix_expression, $)],
        [[_.postfix_expression,_.token.$symbol31,_.expression,_.token.$symbol32],$=>Node(NodeType.postfix_expression, $)],
        [[_.postfix_expression,_.token.$symbol29,_.expression,_.token.$symbol30],$=>Node(NodeType.postfix_expression, $)],
        [[_.postfix_expression,_.token.$symbol51,_.identifier],$=>Node(NodeType.postfix_expression, $)],
        [[_.postfix_expression,_.token.$symbol45,_.token.$symbol42,_.identifier],$=>Node(NodeType.postfix_expression, $)],
        [[_.postfix_expression,_.token.$symbol48],$=>Node(NodeType.postfix_expression, $)],
        [[_.postfix_expression,_.token.$symbol49],$=>Node(NodeType.postfix_expression, $)],
    ],
    primary_expression: _=>[
        [[_.identifier],$=>Node(NodeType.primary_expression, $)],
        [[_.constant],$=>Node(NodeType.primary_expression, $)],
        [[_.string],$=>Node(NodeType.primary_expression, $)],
        [[_.token.$symbol29,_.expression,_.token.$symbol30],$=>Node(NodeType.primary_expression, $)],
    ],
    constant: _=>[
        [[_.integer_constant],$=>Node(NodeType.constant, $)],
        [[_.character_constant],$=>Node(NodeType.constant, $)],
        [[_.floating_constant],$=>Node(NodeType.constant, $)],
    ],
    expression: _=>[
        [[_.assignment_expression],$=>Node(NodeType.expression, $)],
        [[_.expression,_.token.$symbol24,_.assignment_expression],$=>Node(NodeType.expression, $[0].concat($[1]))],
    ],
    assignment_expression: _=>[
        [[_.conditional_expression], $=>$[0]],
        [[_.conditional_expression,_.assignment_operator,_.assignment_expression],$=>Node(NodeType.assignment_expression, $)],
    ],
    assignment_operator: _=>[
        [[_.token.$symbol43],$=>Node(NodeType.assignment_operator, $)],
        [[_.token.$symbol53],$=>Node(NodeType.assignment_operator, $)],
        [[_.token.$symbol54],$=>Node(NodeType.assignment_operator, $)],
        [[_.token.$symbol55],$=>Node(NodeType.assignment_operator, $)],
        [[_.token.$symbol56],$=>Node(NodeType.assignment_operator, $)],
        [[_.token.$symbol57],$=>Node(NodeType.assignment_operator, $)],
        [[_.token.$symbol41,_.token.$symbol41,_.token.$symbol43],$=>Node(NodeType.assignment_operator, $)],
        [[_.token.$symbol42,_.token.$symbol42,_.token.$symbol43],$=>Node(NodeType.assignment_operator, $)],
        [[_.token.$symbol58],$=>Node(NodeType.assignment_operator, $)],
        [[_.token.$symbol59],$=>Node(NodeType.assignment_operator, $)],
        [[_.token.$symbol60],$=>Node(NodeType.assignment_operator, $)],
    ],
    unary_operator: _=>[
        [[_.token.$symbol38],$=>Node(NodeType.unary_operator, $)],
        [[_.token.$symbol26],$=>Node(NodeType.unary_operator, $)],
        [[_.token.$symbol44],$=>Node(NodeType.unary_operator, $)],
        [[_.token.$symbol45],$=>Node(NodeType.unary_operator, $)],
        [[_.token.$symbol61],$=>Node(NodeType.unary_operator, $)],
        [[_.token.$symbol62],$=>Node(NodeType.unary_operator, $)],
    ],
    type_name: _=>[
        [[_.specifier_qualifier$ms,_.abstract_declarator$o],$=>Node(NodeType.type_name, $)],
    ],
    specifier_qualifier$m: _=>[
        [[_.specifier_qualifier],$=>$],
    ],
    specifier_qualifier$ms: _=>[
        [[_.specifier_qualifier$m],$=>Node(NodeType.specifier_qualifier, $[0])],
        [[_.specifier_qualifier$ms, _.specifier_qualifier$m],$=>Node(NodeType.specifier_qualifier,$[0].concat($[1]))],
    ],
    abstract_declarator$o: _=>[
        [[_.abstract_declarator],$=>Node(NodeType.abstract_declarator,$)],
        [[],$=>$],
    ],
    parameter_list: _=>[
        [[_.parameter_declaration],$=>Node(NodeType.parameter_list, $)],
        [[_.parameter_list,_.token.$symbol24,_.parameter_declaration],$=>Node(NodeType.parameter_list, $[0].concat([$[2]]))],
    ],
    parameter_declaration: _=>[
        [[_.declaration_specifier$ms,_.declarator],$=>Node(NodeType.parameter_declaration, $)],
        [[_.declaration_specifier$ms,_.abstract_declarator],$=>Node(NodeType.parameter_declaration, $)],
        [[_.declaration_specifier$ms],$=>Node(NodeType.parameter_declaration, $)],
    ],
    declaration_specifier$m: _=>[
        [[_.declaration_specifier],$=>$],
    ],
    declaration_specifier$ms: _=>[
        [[_.declaration_specifier$m],$=>Node(NodeType.declaration_specifier, $[0])],
        [[_.declaration_specifier$ms, _.declaration_specifier$m],$=>Node(NodeType.declaration_specifier,$[0].concat($[1]))],
    ],
    abstract_declarator: _=>[
        [[_.pointer],$=>Node(NodeType.abstract_declarator, $)],
        [[_.pointer,_.direct_abstract_declarator],$=>Node(NodeType.abstract_declarator, $)],
        [[_.direct_abstract_declarator],$=>Node(NodeType.abstract_declarator, $)],
    ],
    direct_abstract_declarator: _=>[
        [[_.token.$symbol29,_.abstract_declarator,_.token.$symbol30],$=>Node(NodeType.direct_abstract_declarator, $)],
        [[_.token.$symbol31,_.constant_expression$o,_.token.$symbol32],$=>Node(NodeType.direct_abstract_declarator, $)],
        [[_.token.$symbol29,_.parameter_list$o,_.token.$symbol30],$=>Node(NodeType.direct_abstract_declarator, $)],
        [[_.direct_abstract_declarator,_.token.$symbol31,_.constant_expression$o,_.token.$symbol32],$=>Node(NodeType.direct_abstract_declarator, $)],
        [[_.direct_abstract_declarator,_.token.$symbol29,_.parameter_list$o,_.token.$symbol30],$=>Node(NodeType.direct_abstract_declarator, $)],
    ],
    parameter_list$o: _=>[
        [[_.parameter_list],$=>Node(NodeType.parameter_list,$)],
        [[],$=>$],
    ],
    declaration: _=>[
        [[_.declaration_specifier$ms,_.init_declarator$rs,_.token.$symbol52],$=>Node(NodeType.declaration, $)],
    ],
    init_declarator$r: _=>[
        [[_.init_declarator],$=>$],
        [[],$=>$],
    ],
    init_declarator$rs: _=>[
        [[_.init_declarator$r],$=>Node(NodeType.init_declarator, $[0])],
        [[_.init_declarator$rs, _.init_declarator$r],$=>Node(NodeType.init_declarator,$[0].concat($[1]))],
    ],
    init_declarator: _=>[
        [[_.declarator],$=>Node(NodeType.init_declarator, $)],
        [[_.declarator,_.token.$symbol43,_.initializer],$=>Node(NodeType.init_declarator, $)],
    ],
    initializer: _=>[
        [[_.assignment_expression],$=>Node(NodeType.initializer, $)],
        [[_.token.$symbol20,_.initializer_list,_.token.$symbol21],$=>Node(NodeType.initializer, $)],
        [[_.token.$symbol20,_.initializer_list,_.token.$symbol24,_.token.$symbol21],$=>Node(NodeType.initializer, $)],
    ],
    initializer_list: _=>[
        [[_.initializer],$=>Node(NodeType.initializer_list, $)],
        [[_.initializer_list,_.token.$symbol24,_.initializer],$=>Node(NodeType.initializer_list, $)],
    ],
    compound_statement: _=>[
        [[_.token.$symbol20,_.declaration$rs,_.statement$rs,_.token.$symbol21],$=>Node(NodeType.compound_statement, $)],
    ],
    declaration$r: _=>[
        [[_.declaration],$=>$],
        [[],$=>$],
    ],
    declaration$rs: _=>[
        [[_.declaration$r],$=>Node(NodeType.declaration, $[0])],
        [[_.declaration$rs, _.declaration$r],$=>Node(NodeType.declaration,$[0].concat($[1]))],
    ],
    statement$r: _=>[
        [[_.statement],$=>$],
        [[],$=>$],
    ],
    statement$rs: _=>[
        [[_.statement$r],$=>Node(NodeType.statement, $[0])],
        [[_.statement$rs, _.statement$r],$=>Node(NodeType.statement,$[0].concat($[1]))],
    ],
    statement: _=>[
        [[_.labeled_statement],$=>Node(NodeType.statement, $)],
        [[_.expression_statement],$=>Node(NodeType.statement, $)],
        [[_.compound_statement],$=>Node(NodeType.statement, $)],
        [[_.selection_statement],$=>Node(NodeType.statement, $)],
        [[_.iteration_statement],$=>Node(NodeType.statement, $)],
        [[_.jump_statement],$=>Node(NodeType.statement, $)],
    ],
    labeled_statement: _=>[
        [[_.identifier,_.token.$symbol25,_.statement],$=>Node(NodeType.labeled_statement, $)],
        [[_.token.$symbol63,_.constant_expression,_.token.$symbol25,_.statement],$=>Node(NodeType.labeled_statement, $)],
        [[_.token.$symbol64,_.token.$symbol25,_.statement],$=>Node(NodeType.labeled_statement, $)],
    ],
    expression_statement: _=>[
        [[_.expression$o,_.token.$symbol52],$=>Node(NodeType.expression_statement, $)],
    ],
    expression$o: _=>[
        [[_.expression],$=>Node(NodeType.expression,$)],
        [[],$=>$],
    ],
    selection_statement: _=>[
        [[_.token.$symbol65,_.token.$symbol29,_.expression,_.token.$symbol30,_.statement],$=>Node(NodeType.selection_statement, $)],
        [[_.token.$symbol65,_.token.$symbol29,_.expression,_.token.$symbol30,_.statement,_.token.$symbol66,_.statement],$=>Node(NodeType.selection_statement, $)],
        [[_.token.$symbol67,_.token.$symbol29,_.expression,_.token.$symbol30,_.statement],$=>Node(NodeType.selection_statement, $)],
    ],
    iteration_statement: _=>[
        [[_.token.$symbol68,_.token.$symbol29,_.expression,_.token.$symbol30,_.statement],$=>Node(NodeType.iteration_statement, $)],
        [[_.token.$symbol69,_.statement,_.token.$symbol68,_.token.$symbol29,_.expression,_.token.$symbol30,_.token.$symbol52],$=>Node(NodeType.iteration_statement, $)],
        [[_.token.$symbol70,_.token.$symbol29,_.expression$o,_.token.$symbol52,_.expression$o,_.token.$symbol52,_.expression$o,_.token.$symbol30,_.statement],$=>Node(NodeType.iteration_statement, $)],
    ],
    jump_statement: _=>[
        [[_.token.$symbol71,_.identifier,_.token.$symbol52],$=>Node(NodeType.jump_statement, $)],
        [[_.token.$symbol72,_.token.$symbol52],$=>Node(NodeType.jump_statement, $)],
        [[_.token.$symbol73,_.token.$symbol52],$=>Node(NodeType.jump_statement, $)],
        [[_.token.$symbol74,_.expression$o,_.token.$symbol52],$=>Node(NodeType.jump_statement, $)],
    ],
},false,true);


import testcode from './eg';
import {IRGenerator} from "./ir_gen";
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
console.log(printResult(result));
const irGenerator = new IRGenerator(true);
irGenerator.generate(result);