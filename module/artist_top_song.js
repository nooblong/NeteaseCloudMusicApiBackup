// 歌手热门 50 首歌曲
const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(
    'POST',
    `/api/artist/top/song`,
    data,
    createOption(query, 'weapi'),
  )
}
