// 歌手介绍

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/artist/introduction`,
    data,
    createOption(query, 'weapi'),
  )
}
