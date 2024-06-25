// 一起听状态

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/api/listen/together/status/get`,
    {},
    createOption(query, 'weapi'),
  )
}
