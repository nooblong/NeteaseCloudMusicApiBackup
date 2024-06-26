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
    `/api/playlist/remove`,
    data,
    createOption(query, 'weapi'),
  )
}
