// 发送验证码

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    ctcode: query.ctcode || '86',
    cellphone: query.phone,
  }
  return request(
    'POST',
    `/api/sms/captcha/sent`,
    data,
    createOption(query, 'weapi'),
  )
}
