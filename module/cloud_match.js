const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    userId: query.uid,
    songId: query.sid,
    adjustSongId: query.asid,
  }
  return request(
    'POST',
    `/api/cloud/user/song/match`,
    data,
    createOption(query, 'weapi'),
  )
}
