// 最新专辑

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/api/discovery/newAlbum`,
    {},
    createOption(query, 'weapi'),
  )
}
