// 云盘数据

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 30,
    offset: query.offset || 0,
  }
  return request(
    'POST',
    `https://music.163.com/api/v1/cloud/get`,
    data,
    createOption(query, 'weapi'),
  )
}
