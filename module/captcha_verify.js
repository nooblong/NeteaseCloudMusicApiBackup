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
    `/api/sms/captcha/verify`,
    data,
    createOption(query, 'weapi'),
  )
}
