/**
 *
 * 针对localStorage 和 sessionStorage 封装
 *
 * */
const localStorage = window.localStorage
let _keyPrefix = 'vue-ys-demo'

/**
 * 初始化配置
 * @param option keyPrefix: 存储前缀，用来区分不同用户的数据，否则同一台电脑，不同人存储数据会互相干扰
 *
 * */
export function init(option) {
  const {keyPrefix = 'vue-ys-demo'} = option
  _keyPrefix = `${keyPrefix}-`
}

/**
 * localStorage 存储数据
 * @param {string} key 数据的 key
 * @param {*} value 要存储的数据
 * */
export function setItem(key, value) {
  key = _keyPrefix + key
  value = JSON.stringify(value)
  localStorage.setItem(key, value)
}

/**
 * localStorage 获取数据
 * @param {string} key
 * @return {json} key 对应的数据
 * */
export function getItem(key) {
  try {
    key = _keyPrefix + key
    let value = localStorage.getItem(key)
    return JSON.parse(value)
  } catch (e) {
    return {}
  }
}

/**
 * localStorage 根据keyPrefix清空数据
 *
 * */
export function clear() {
  const localStorageKeys = Object.keys(localStorage)
  if (localStorageKeys && localStorageKeys.length) {
    localStorageKeys.forEach(item => {
      if (item.startWith(_keyPrefix)) {
        localStorage.removeItem(item)
      }
    })
  }
}

/**
 * localStorage 删除数据
 *
 * */
export function removeItem(key) {
  key = _keyPrefix + key
  localStorage.removeItem(key)
}

/**
 *
 * localStorage 根据keys 获取一组数据
 *
 * */
export function multiGet(keys) {
  let value = {}
  keys.forEach((key) => value[key].getItem(key))
  return value
}

/**
 * localStorage 根据keys 删除一组数据
 * @param {array} keys
 */
export function multiRemove(keys) {
  keys.forEach((key) => removeItem(key))
}

