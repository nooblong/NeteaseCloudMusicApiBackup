// 精品歌单 tags
const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/api/playlist/highquality/tags`,
    data,
    createOption(query, 'weapi'),
  )
}
