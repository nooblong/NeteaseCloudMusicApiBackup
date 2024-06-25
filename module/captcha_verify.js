// 校验验证码

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    ctcode: query.ctcode || '86',
    cellphone: query.phone,
    captcha: query.captcha,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/sms/captcha/verify`,
    data,
    createOption(query, 'weapi'),
  )
}
