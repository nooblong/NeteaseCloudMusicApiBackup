// 一起听 发送心跳

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    roomId: query.roomId,
    songId: query.songId,
    playStatus: query.playStatus,
    progress: query.progress,
  }
  return request(
    'POST',
    `/api/listen/together/heartbeat`,
    data,
    createOption(query),
  )
}
