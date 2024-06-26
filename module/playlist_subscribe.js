// 收藏与取消收藏歌单

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  query.t = query.t == 1 ? 'subscribe' : 'unsubscribe'
  const data = {
    id: query.id,
  }
  return request(
    'POST',
    `/api/playlist/${query.t}`,
    data,
    createOption(query, 'weapi'),
  )
}
