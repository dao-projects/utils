# @daoxin/utils
## 安装

```bash
npm install @daoxin/utils
```

## 接口文档

### baseUtils

| 成员                   | 说明                                 |
| ---------------------- | ------------------------------------ |
| deepCopyJSON ()        | 深度复制（采用JSON解析方式）         |
| deepCopy ()            | 深度复制（采用递归式）               |
| createGuid ()          | 创建GUID                             |
| createIntRandom ()     | 创建指定范围的随机整数               |
| isFromMobileBrowser () | 判断网页是否通过移动端设备打开       |
| copyText ()            | 复制文本                             |
| $extend ()             | 对象扩展（JQuery $.extend 实现代码） |
| debounce ()            | 防抖                                 |
| throttle ()            | 节流                                 |
| loadCss ()             | 加载css                              |
| loadJs ()              | 加载js                               |
| getArrayItemRandom ()  | 随机获取数组中的一个子集                               |

### cookieUtils

| 成员          | 说明                                 |
| ------------- | ------------------------------------ |
| set ()        | 设置Cookie                           |
| del ()        | 删除Cookie                           |
| get ()        | 获取Cookie                           |
| getUseJSON () | 取Cookie（结果为经过JSON解析的对象） |

### storageUtils

| 成员                  | 说明                           |
| --------------------- | ------------------------------ |
| local.set ()          | 设置LocalStorage               |
| local.get ()          | 获取LocalStorage               |
| local.getUseJSON ()   | 获取经过JSON解析的LocalStorage |
| local.remove()        | 移除指定LocalStorage           |
| local.clear ()        | 清空LocalStorage               |
| session.set ()        | 设置SessionStorage             |
| session.get ()        | 获取SessionStorage             |
| session.getUseJSON () | 获取经过JSON解析的LocalStorage |
| session.remove ()     | 移除指定SessionStorage         |
| session.clear ()      | 清空SessionStorage             |

### descriptoUtils

| 成员        | 说明                     |
| ----------- | ------------------------ |
| AutoBind () | 自动绑定this上下文装饰器 |
| Debounce () | 防抖                     |
| Throttle () | 节流                     |

### cryptoUtils

| 成员            | 说明        |
| --------------- | ----------- |
| setGlobelKey () | 设置全局Key |
| setGlobelIV ()  | 设置全局IV  |
| encrypto ()     | 加密字符串  |
| decrypto ()     | 解密字符串  |


###  extArray

| 成员            | 说明        |
| --------------- | ----------- |
| new extArray().clear()              | 清空   |
| new extArray().insert()             | 插入对象                |
| new extArray().removeIndex()      | 移除指定位置的对象       |
| new extArray().removeValue()      | 移除指定的对象           |
| new extArray().reset()             | 替换                    |
| new extArray().unique()           | 去重处理                 |
| new extArray().getUnique()        | 获取唯一值               |
| new extArray().equal()            | 数组间是否相等           |
| new extArray().findItem()         | 查找符合条件的第一个对象 |
| new extArray().findItems()        | 查找符合条件的所有对象   |
| new extArray().propToArr()        | 对象属性转数组           |
| new extArray().last()             | 数据的最后一位           |

###  extDate

| 成员                                 | 说明                     |
| ------------------------------------ | ------------------------ |
| new extDate().format()            | 日期格式化字符串         |
| new extDate().getNextDate()       | 获取前后日期             |
| new extDate().getMonth()          | 获取月份                 |

###  extNumber

| 成员                                 | 说明                     |
| ------------------------------------ | ------------------------ |
| new extNumber().divide()          | 整除                     |
| new extNumber().floor()           | 向下取整                 |
| new extNumber().ceil()            | 向上取整                 |
| new extNumber().abs()             | 绝对值                   |
| new extNumber().round()           | 保留位                   |
| new extNumber().toDate()          | 转化为日期对象           |
| new extNumber().toDateFormat()    | 转化为日期格式化字符串   |
| new extNumber().toCashString()    | 转化为现金字符串         |
| new extNumber().toChineseString() | 转化为中文数字字符串     |

###  extString

| 成员                                 | 说明                     |
| ------------------------------------ | ------------------------ |
| new extString().trimAll()         | 清空所有空格             |
| new extString().toDate()          | 转化为日期对象           |
| new extString().toDateFormat()    | 转化为日期格式化字符串   |



## 使用样例

```javascript
import { baseUtils } from '@daoxin/utils'

test('deepCopyJSON: can run true', () => {

  const obj = {
    a: 1, b: '2', c: '', d: false, e: {}, f: () => 1, g: null, h: class {}
  }
  const newObj = baseUtils.deepCopyJSON(obj)

  expect(newObj !== obj).toBe(true)
  expect(newObj.a).toBe(1)
  expect(newObj.b).toBe('2')
  expect(newObj.c === '').toBe(true)
  expect(newObj.d).toBe(false)
  expect(typeof newObj.e).toBe('object')
  expect(typeof newObj.f === 'undefined').toBe(true)
  expect(newObj.g === null).toBe(true)
  expect(typeof newObj.h === 'undefined').toBe(true)
})

test('deepCopy: can run true', () => {

  const obj = {
    a: 1, b: '2', c: '', d: false, e: {}, f: () => 1, g: null, h: class {}
  }
  const newObj = baseUtils.deepCopy(obj)

  expect(newObj !== obj).toBe(true)
  expect(newObj.a).toBe(1)
  expect(newObj.b).toBe('2')
  expect(newObj.c === '').toBe(true)
  expect(newObj.d).toBe(false)
  expect(typeof newObj.e).toBe('object')
  expect(newObj.f()).toBe(1)
  expect(newObj.g === null).toBe(true)
  expect(typeof newObj.h).toBe('function')
})

test('createGuid: can run true', () => {
  const guid = baseUtils.createGuid()
  expect(guid.length).toBe(36)
})

test('createIntRandom: can run true', () => {
  const num = baseUtils.createIntRandom(0, 1)
  expect(num === 1 || num === 0).toBe(true)
})


test('$extend: can run true', () => {
  const obj = { a: 1, b: { b1: 2 } }
  baseUtils.$extend(true, obj, {
    c: 2, b: { b2: 3 }
  })
  expect(obj.a).toBe(1)
  expect(obj.c).toBe(2)
  expect(obj.b.b1).toBe(2)
  expect(obj.b.b2).toBe(3)
})
```

```javascript
import { cryptoUtils } from '@daoxin/utils'

test('encrypto and decrypto: can run true', () => {
  const str = 'hello world'
  const enStr = cryptoUtils.encrypto(str)
  const deStr = cryptoUtils.decrypto(enStr)
  expect(deStr).toBe(str)
})

```




### $ext

| 成员                                 | 说明                     |
| ------------------------------------ | ------------------------ |
| $ext(arg0: number).divide()          | 整除                     |
| $ext(arg0: number).floor()           | 向下取整                 |
| $ext(arg0: number).ceil()            | 向上取整                 |
| $ext(arg0: number).abs()             | 绝对值                   |
| $ext(arg0: number).round()           | 保留位                   |
| $ext(arg0: number).toDate()          | 转化为日期对象           |
| $ext(arg0: number).toDateFormat()    | 转化为日期格式化字符串   |
| $ext(arg0: number).toCashString()    | 转化为现金字符串         |
| $ext(arg0: number).toChineseString() | 转化为中文数字字符串     |
| $ext(arg0: Date).format()            | 日期格式化字符串         |
| $ext(arg0: Date).getNextDate()       | 获取前后日期             |
| $ext(arg0: Date).getMonth()          | 获取月份                 |
| $ext(arg0: string).trimAll()         | 清空所有空格             |
| $ext(arg0: string).toDate()          | 转化为日期对象           |
| $ext(arg0: string).toDateFormat()    | 转化为日期格式化字符串   |
| $ext(arg0: Array).insert()           | 插入对象                 |
| $ext(arg0: Array).removeIndex()      | 移除指定位置的对象       |
| $ext(arg0: Array).removeValue()      | 移除指定的对象           |
| $ext(arg0: Array).unique()           | 去重处理                 |
| $ext(arg0: Array).getUnique()        | 获取唯一值               |
| $ext(arg0: Array).equal()            | 数组间是否相等           |
| $ext(arg0: Array).findItem()         | 查找符合条件的第一个对象 |
| $ext(arg0: Array).findItems()        | 查找符合条件的所有对象   |
| $ext(arg0: Array).propToArr()        | 对象属性转数组           |
| $ext(arg0: Array).last()             | 数据的最后一位           |

## 使用样例

```javascript
// 方式一：
/* eslint-disable no-undef */
import $ext from '@daoxin/utils'

test('trimAll() can run', () => {
  const str = '  tes  test  '
  const newStr = $ext(str).trimAll()
  expect(newStr).toBe('testest')
})

test('toDate() can run', () => {
  const dateStr = '2020/1/1'
  const date = $ext(dateStr).toDate()
  expect(date.getFullYear()).toBe(2020)
})

test('toDateFormat() can run', () => {
  const dateStr = '2020/1/1'
  const year = $ext(dateStr).toDateFormat('yyyy')
  expect(year).toBe('2020')
})


// 方式二：
import { extString } from '@daoxin/utils'
test('trimAll() can run', () => {
  const str = '  tes  test  '
  const $ext=new extString(str);
  const newStr = $ext.trimAll()
  expect(newStr).toBe('testest')
})

```
```javascript
/* eslint-disable no-undef */
import $ext from '@daoxin/utils'

test('insert() can run', () => {
  const arr = [1, 0, 2]
  $ext(arr).insert(3, 9)
  expect(arr[3]).toBe(9)
  $ext(arr).insert(0, -1)
  expect(arr[0]).toBe(-1)
})

test('removeIndex() can run', () => {
  const arr = [1, 0, 2]
  $ext(arr).removeIndex(2)
  expect(arr.length).toBe(2)
  const v = $ext(arr).removeIndex(0, true)
  expect(v).toBe(1)
})

test('clear() can run', () => {
  const arr = [1, 0, 2]
  $ext(arr).clear()
  expect(arr.length).toBe(0)
})

test('reset() can run', () => {
  const arr = [1, 0, 2]
  $ext(arr).reset(3, 3, 3, 3)
  expect(arr.length).toBe(4)
})

test('removeValue() can run', () => {
  const arr = [1, 0, 2, 0, 2]
  $ext(arr).removeValue(0)
  expect(arr.length).toBe(4)
  $ext(arr).removeValue(2, true)
  expect(arr.length).toBe(2)
})

test('unique() can run', () => {
  const arr = [1, 0, 2, 0, 2]
  $ext(arr).unique(0)
  expect(arr.length).toBe(3)
})

test('getUnique() can run', () => {
  const arr = [1, 0, 2, 0, 2]
  const newArr = $ext(arr).getUnique(0)
  expect(arr.length).toBe(5)
  expect(newArr.length).toBe(3)
})

test('unique() can run', () => {
  const arr = [1, 0, 2, 0, 2]
  const arr2 = [1, 0, 2, 0, 2]
  const b = $ext(arr).equal(arr2)
  expect(b).toBe(true)
})

test('findItem() can run', () => {
  const arr = [{ a: 1, b: 2 }, { a: 2, b: 3 }]
  const ret = $ext(arr).findItem('a', 1)
  expect(ret.a).toBe(1)
  expect(ret.b).toBe(2)
})

test('findItems() can run', () => {
  const arr = [{ a: 1, b: 2 }, { a: 2, b: 3 }, { a: 2, b: 4 }]
  const ret = $ext(arr).findItems('a', 2)
  expect(ret.length).toBe(2)
  expect(ret[0].b).toBe(3)
  expect(ret[1].b).toBe(4)
})

test('propToArr() can run', () => {
  const arr = [{ a: 1, b: 2 }, { a: 2, b: 3 }, { a: 2, b: 4 }]
  const ret = $ext(arr).propToArr('a')
  expect(ret.length).toBe(3)
  expect(ret[0]).toBe(1)
  expect(ret[1]).toBe(2)
  expect(ret[2]).toBe(2)
})

test('last() can run', () => {
  const arr = [1, 0, 2, 0, 2]
  const last = $ext(arr).last()
  expect(last).toBe(2)
})

```
```javascript
/* eslint-disable no-undef */
import $ext from '@daoxin/utils'

test('format() can run', () => {
  const date = new Date()
  const year = $ext(date).format('yyyy')
  const month = $ext(date).format('M')
  const d = $ext(date).format('d')
  const h = $ext(date).format('h')
  const m = $ext(date).format('m')
  const s = $ext(date).format('s')
  expect(year).toBe(date.getFullYear().toString())
  expect(month).toBe((date.getMonth() + 1).toString())
  expect(d).toBe(date.getDate().toString())
  expect(h).toBe(date.getHours().toString())
  expect(m).toBe(date.getMinutes().toString())
  expect(s).toBe(date.getSeconds().toString())
})

test('getMonth() can run', () => {
  const date = new Date()
  const month = $ext(date).getMonth()
  expect(month).toBe(date.getMonth() + 1)
})

test('getNextDate() can run', () => {
  const date = new Date('2021/2/28')
  const dateExt = $ext(date)
  expect(dateExt.getNextDate(1).getMonth() + 1).toBe(3)
  expect(dateExt.getNextDate(-1).getDate()).toBe(27)
})

```
```javascript
/* eslint-disable no-undef */
import $ext from '@daoxin/utils'

test('divide() can run', () => {
  const num = 7
  expect($ext(num).divide(3)).toBe(2)
})

test('floor() can run', () => {
  const num = 7.9
  expect($ext(num).floor()).toBe(7)
})

test('ceil() can run', () => {
  const num = 7.1
  expect($ext(num).ceil()).toBe(8)
})

test('abs() can run', () => {
  const num = -7.1
  expect($ext(num).abs()).toBe(7.1)
})

test('round() can run', () => {
  expect($ext(7.4).round()).toBe(7)
  expect($ext(7.5).round()).toBe(8)
  expect($ext(7.5).round(-1)).toBe(10)
  expect($ext(7.54).round(1)).toBe(7.5)
})

test('toDate() can run', () => {
  expect($ext(0).toDate().getFullYear()).toBe(1970)
})

test('toDateFormat() can run', () => {
  expect($ext(0).toDateFormat('yyyy')).toBe('1970')
})

test('toCashString() can run', () => {
  expect($ext(100000000).toCashString()).toBe('100,000,000')
})

test('toDateFormat() can run', () => {
  expect($ext(100000000).toChineseString()).toBe('一亿')
})

```