// 最近联系

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/api/msg/recentcontact/get`,
    data,
    createOption(query, 'weapi'),
  )
}
