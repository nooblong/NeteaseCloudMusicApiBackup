// 历史每日推荐歌曲

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `/api/discovery/recommend/songs/history/recent`,
    data,
    createOption(query, 'weapi'),
  )
}
