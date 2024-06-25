// 智能播放

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    songId: query.id,
    type: 'fromPlayOne',
    playlistId: query.pid,
    startMusicId: query.sid || query.id,
    count: query.count || 1,
  }
  return request(
    'POST',
    `/api/playmode/intelligence/list`,
    data,
    createOption(query, 'weapi'),
  )
}
