// 类别热门电台

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/weapi/user/level`,
    data,
    createOption(query, 'weapi'),
  )
}
