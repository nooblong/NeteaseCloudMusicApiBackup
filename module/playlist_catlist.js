// 全部歌单分类

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `/api/playlist/catalogue`,
    {},
    createOption(query, 'weapi'),
  )
}
