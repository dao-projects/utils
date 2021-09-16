"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extString = exports.extNumber = exports.extDate = exports.extArray = exports.baseUtils = void 0;
exports.baseUtils = __importStar(require("./common/base.common"));
__exportStar(require("./common/cookie.common"), exports);
__exportStar(require("./common/storage.common"), exports);
__exportStar(require("./common/descriptor.common"), exports);
__exportStar(require("./common/crypto.common"), exports);
__exportStar(require("./common/reg.common"), exports);
// extension
const array_extension_1 = __importDefault(require("./extension/array.extension"));
exports.extArray = array_extension_1.default;
const date_extension_1 = __importDefault(require("./extension/date.extension"));
exports.extDate = date_extension_1.default;
const number_extension_1 = __importDefault(require("./extension/number.extension"));
exports.extNumber = number_extension_1.default;
const string_extension_1 = __importDefault(require("./extension/string.extension"));
exports.extString = string_extension_1.default;
function ext(_this) {
    if (_this instanceof Date) {
        return (0, date_extension_1.default)(_this);
    }
    if (typeof _this === 'string') {
        return (0, string_extension_1.default)(_this);
    }
    if (typeof _this === 'number') {
        return (0, number_extension_1.default)(_this);
    }
    if (Array.isArray(_this)) {
        return (0, array_extension_1.default)(_this);
    }
}
exports.default = ext;
