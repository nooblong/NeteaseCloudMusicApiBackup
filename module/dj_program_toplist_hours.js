// 电台24小时节目榜
const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
    // 不支持 offset
  }
  return request(
    'POST',
    `https://music.163.com/api/djprogram/toplist/hours`,
    data,
    createOption(query, 'weapi'),
  )
}
