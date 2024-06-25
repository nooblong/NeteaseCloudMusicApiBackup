// 每日推荐歌单

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/v1/discovery/recommend/resource`,
    {},
    createOption(query, 'weapi'),
  )
}
