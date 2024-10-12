module.exports = {
  toBoolean(val) {
    if (typeof val === 'boolean') return val
    if (val === '') return val
    return val === 'true' || val == '1'
  },
  cookieToJson(cookie) {
    if (!cookie) return {}
    let cookieArr = cookie.split(';')
    let obj = {}
    cookieArr.forEach((i) => {
      let arr = i.split('=')
      if (arr.length == 2) obj[arr[0].trim()] = arr[1].trim()
    })
    return obj
  },
  cookieObjToString(cookie) {
    return Object.keys(cookie)
      .map(
        (key) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(cookie[key])}`,
      )
      .join('; ')
  },
  getRandom(num) {
    var random = Math.floor(
      (Math.random() + Math.floor(Math.random() * 9 + 1)) *
        Math.pow(10, num - 1),
    )
    return random
  },
  generateRandomChineseIP() {
    const chinaIPPrefixes = ['116.25', '116.76', '116.77', '116.78']

    const randomPrefix =
      chinaIPPrefixes[Math.floor(Math.random() * chinaIPPrefixes.length)]
    return `${randomPrefix}.${generateIPSegment()}.${generateIPSegment()}`
  },
}

// 生成一个随机整数
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// 生成一个随机IP地址段
function generateIPSegment() {
  return getRandomInt(1, 255)
}
