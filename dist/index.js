"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const fs = __importStar(require("fs"));
function generateBigBangArray() {
    const result = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('BIGBANG');
        }
        else if (i % 3 === 0) {
            result.push('BIG');
        }
        else if (i % 5 === 0) {
            result.push('BANG');
        }
        else {
            result.push(i.toString());
        }
    }
    return result;
}
function writeArrayToFile(array) {
    const json = JSON.stringify(array, null, 2);
    fs.writeFileSync('output.json', json, 'utf8');
}
const bigBangArray = generateBigBangArray();
writeArrayToFile(bigBangArray);
console.log('Array has been written to output.json');
