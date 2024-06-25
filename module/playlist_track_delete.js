// 收藏单曲到歌单 从歌单删除歌曲

const createOption = require('../util/option.js')
module.exports = async (query, request) => {
  query.cookie.os = 'pc'
  query.cookie.appver = '2.9.7'
  query.ids = query.ids || ''
  const data = {
    id: query.id,
    tracks: JSON.stringify(
      query.ids.split(',').map((item) => {
        return { type: 3, id: item }
      }),
    ),
  }

  return request(
    'POST',
    `/api/playlist/track/delete`,
    data,
    createOption(query, 'weapi'),
  )
}
