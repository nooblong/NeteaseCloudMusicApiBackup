// 私人FM

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/v1/radio/get`,
    {},
    createOption(query, 'weapi'),
  )
}
