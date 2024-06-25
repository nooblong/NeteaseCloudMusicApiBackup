// 账号云豆数

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/weapi/cloudbean/get`,
    data,
    createOption(query, 'weapi'),
  )
}
