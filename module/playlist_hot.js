// 热门歌单分类

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `/api/playlist/hottags`,
    {},
    createOption(query, 'weapi'),
  )
}
