// 私信和通知接口
const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/weapi/pl/count`,
    data,
    createOption(query, 'weapi'),
  )
}
