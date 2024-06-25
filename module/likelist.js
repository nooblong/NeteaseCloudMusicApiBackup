// 喜欢的歌曲(无序)

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    uid: query.uid,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/song/like/get`,
    data,
    createOption(query, 'weapi'),
  )
}
