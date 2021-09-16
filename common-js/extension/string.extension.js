"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_extension_1 = __importDefault(require("./date.extension"));
function extString(str) {
    return {
        trimAll() {
            return str.replace(new RegExp(' ', 'gm'), '');
        },
        toDate() {
            return new Date(str);
        },
        toDateFormat(fmt) {
            const date = extString(str).toDate();
            return (0, date_extension_1.default)(date).format(fmt);
        }
    };
}
exports.default = extString;
