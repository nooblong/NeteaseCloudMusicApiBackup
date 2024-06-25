// 编辑歌单顺序

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  query.cookie.appver = '2.9.7'
  const data = {
    ids: query.ids,
  }
  return request(
    'POST',
    `https://music.163.com/api/playlist/order/update`,
    data,
    createOption(query, 'weapi'),
  )
}
