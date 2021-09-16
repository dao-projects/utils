import * as baseUtils_1 from './common/base.common';
export { baseUtils_1 as baseUtils };
export * from './common/cookie.common';
export * from './common/storage.common';
export * from './common/descriptor.common';
export * from './common/crypto.common';
export * from './common/reg.common';
// extension
import extArray from './extension/array.extension';
import extDate from './extension/date.extension';
import extNumber from './extension/number.extension';
import extString from './extension/string.extension';
export { extArray, extDate, extNumber, extString, };
function ext(_this) {
    if (_this instanceof Date) {
        return extDate(_this);
    }
    if (typeof _this === 'string') {
        return extString(_this);
    }
    if (typeof _this === 'number') {
        return extNumber(_this);
    }
    if (Array.isArray(_this)) {
        return extArray(_this);
    }
}
export default ext;
