// 电台banner

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  query.cookie.appver = '2.9.7'
  return request(
    'POST',
    `https://music.163.com/weapi/djradio/banner/get`,
    {},
    createOption(query, 'weapi'),
  )
}
