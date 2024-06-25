// 热门歌单分类

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/playlist/hottags`,
    {},
    createOption(query, 'weapi'),
  )
}
