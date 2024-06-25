// 电台节目详情

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(
    'POST',
    `https://music.163.com/api/dj/program/detail`,
    data,
    createOption(query, 'weapi'),
  )
}
