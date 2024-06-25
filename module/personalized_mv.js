// 推荐MV

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/personalized/mv`,
    {},
    createOption(query, 'weapi'),
  )
}
