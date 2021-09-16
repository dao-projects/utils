import extDate from './date.extension'

export interface IStringExtension {
  trimAll () : string
  toDate () : Date
  toDateFormat (fmt: string) : string
}

function extString (str: string) : IStringExtension {
  return {
    trimAll () {
      return str.replace(new RegExp(' ', 'gm'), '')
    },
    toDate () {
      return new Date(str)
    },
    toDateFormat (fmt) {
      const date = extString(str).toDate()
      return extDate(date).format(fmt)
    }
  }
}

export default extString