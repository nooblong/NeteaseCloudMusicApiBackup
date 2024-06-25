// 推荐歌单

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 30,
    // offset: query.offset || 0,
    total: true,
    n: 1000,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/personalized/playlist`,
    data,
    createOption(query, 'weapi'),
  )
}
