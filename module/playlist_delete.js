// 删除歌单

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  query.cookie.appver = '2.9.7'
  const data = {
    ids: '[' + query.id + ']',
  }
  return request(
    'POST',
    `https://music.163.com/weapi/playlist/remove`,
    data,
    createOption(query, 'weapi'),
  )
}
