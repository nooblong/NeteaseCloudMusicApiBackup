// 歌手单曲

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/v1/artist/${query.id}`,
    {},
    createOption(query, 'weapi'),
  )
}
