// 歌手专辑列表

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 30,
    offset: query.offset || 0,
    total: true,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/artist/albums/${query.id}`,
    data,
    createOption(query, 'weapi'),
  )
}
