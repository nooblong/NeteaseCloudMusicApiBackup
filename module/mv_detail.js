// MV详情

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.mvid,
  }
  return request(
    'POST',
    `https://music.163.com/api/v1/mv/detail`,
    data,
    createOption(query, 'weapi'),
  )
}
