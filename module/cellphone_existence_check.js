// 检测手机号码是否已注册

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    cellphone: query.phone,
    countrycode: query.countrycode,
  }
  return request(
    'POST',
    `/api/cellphone/existence/check`,
    data,
    createOption(query),
  )
}
