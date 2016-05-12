"use strict";

// SymbolTable [id, type]
// { vars:[string, "type"] }

let addToSymbol = (symbolTable, elem, type) => {
    if (symbolTable[elem]) {
        console.log("Warning: Overwriting variable");
    }
    symbolTable[elem] = type;
};

let semantic = (tree) => {
    let baseSymbolTable = {};
    eachBlockPre(tree, generateSymbolTable, baseSymbolTable) };

let generateSymbolTable = (block, symbolTable) => {
    tree.variables.map((varE) => addToSymbol(args));
    tree.constants.map((varE) => addToSymbol(args));
};

let eachBlockPre = (tree, callbackAction, args) => {
    callbackAction(tree, args);
    tree.functions.map((value) => eachBlockPre(value, callbackAction));
}


module.exports = semantic;

