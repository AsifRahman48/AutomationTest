"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueEmail = getUniqueEmail;
exports.readCSV = readCSV;
exports.readRegistrationCSV = readRegistrationCSV;
exports.readProductsCSV = readProductsCSV;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sync_1 = require("csv-parse/sync");
function getUniqueEmail() {
    return `faisal_${Date.now()}@example.com`;
}
function readCSV(fileName) {
    const filePath = path_1.default.join(process.cwd(), 'data', fileName);
    if (!fs_1.default.existsSync(filePath)) {
        throw new Error(`❌ CSV file not found at: ${filePath}`);
    }
    const fileContent = fs_1.default.readFileSync(filePath, 'utf-8');
    return (0, sync_1.parse)(fileContent, {
        columns: true,
        skip_empty_lines: true,
    });
}
function readRegistrationCSV(fileName) {
    return readCSV(fileName);
}
function readProductsCSV(fileName) {
    return readCSV(fileName);
}
//# sourceMappingURL=utils.js.map