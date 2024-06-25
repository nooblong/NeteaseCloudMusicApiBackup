// 所有榜单内容摘要

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/toplist/detail`,
    {},
    createOption(query, 'weapi'),
  )
}
