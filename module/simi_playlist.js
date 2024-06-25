// 相似歌单

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    songid: query.id,
    limit: query.limit || 50,
    offset: query.offset || 0,
  }
  return request(
    'POST',
    `/api/discovery/simiPlaylist`,
    data,
    createOption(query, 'weapi'),
  )
}
