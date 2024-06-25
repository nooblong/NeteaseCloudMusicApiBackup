// 电台分类列表

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/djradio/category/get`,
    {},
    createOption(query, 'weapi'),
  )
}
