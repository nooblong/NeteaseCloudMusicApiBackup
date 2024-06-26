// 推荐新歌

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  query.cookie.appver = '2.9.7'
  const data = {
    type: 'recommend',
    limit: query.limit || 10,
    areaId: query.areaId || 0,
  }
  return request(
    'POST',
    `/api/personalized/newsong`,
    data,
    createOption(query, 'weapi'),
  )
}
