// 最新MV

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    // 'offset': query.offset || 0,
    area: query.area || '',
    limit: query.limit || 30,
    total: true,
  }
  return request(
    'POST',
    `https://interface.music.163.com/weapi/mv/first`,
    data,
    createOption(query, 'weapi'),
  )
}
