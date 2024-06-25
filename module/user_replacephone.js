const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    phone: query.phone,
    captcha: query.captcha,
    oldcaptcha: query.oldcaptcha,
    countrycode: query.countrycode || '86',
  }
  return request(
    'POST',
    `https://music.163.com/api/user/replaceCellphone`,
    data,
    createOption(query, 'weapi'),
  )
}
