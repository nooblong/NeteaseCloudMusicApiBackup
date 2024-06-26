// 歌单收藏者

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.id,
    limit: query.limit || 20,
    offset: query.offset || 0,
  }
  return request(
    'POST',
    `/api/playlist/subscribers`,
    data,
    createOption(query, 'weapi'),
  )
}
