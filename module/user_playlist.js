// 用户歌单

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    uid: query.uid,
    limit: query.limit || 30,
    offset: query.offset || 0,
    includeVideo: true,
  }
  return request(
    'POST',
    `https://music.163.com/api/user/playlist`,
    data,
    createOption(query, 'weapi'),
  )
}
