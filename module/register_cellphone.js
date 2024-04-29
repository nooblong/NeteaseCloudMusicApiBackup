// 注册账号
const CryptoJS = require('crypto-js')

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  query.cookie.appver = '2.9.7'
  const data = {
    captcha: query.captcha,
    phone: query.phone,
    password: CryptoJS.MD5(query.password).toString(),
    nickname: query.nickname,
    countrycode: query.countrycode || '86',
  }
  return request('POST', `https://music.163.com/api/register/cellphone`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    ua: query.ua || '',
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
