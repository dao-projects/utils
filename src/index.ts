export * as baseUtils from './common/base.common'
export * from './common/cookie.common'
export * from './common/storage.common'
export * from './common/descriptor.common'
export * from './common/crypto.common'
export * from './common/reg.common'

// extension
import extArray, { IArrayExtension } from './extension/array.extension'
import extDate, { IDateExtension } from './extension/date.extension'
import extNumber, { INumberExtension } from './extension/number.extension'
import extString, { IStringExtension } from './extension/string.extension'

export {
  extArray,
  extDate,
  extNumber,
  extString,
  IArrayExtension,
  IDateExtension,
  INumberExtension,
  IStringExtension,
}

function ext (date: Date) : IDateExtension
function ext (str: string) : IStringExtension
function ext (num: number) : INumberExtension
function ext<T> (arr: T[]) : IArrayExtension<T>
function ext<T> (
  _this: Date | string | number | T[]
) : IDateExtension | IStringExtension | INumberExtension | IArrayExtension<T> {
  if (_this instanceof Date) {
    return extDate(_this)
  }
  if (typeof _this === 'string') {
    return extString(_this)
  }
  if (typeof _this === 'number') {
    return extNumber(_this)
  }
  if (Array.isArray(_this)) {
    return extArray(_this)
  }
}
export default ext