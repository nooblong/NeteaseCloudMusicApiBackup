// 曲风列表

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/api/tag/list/get`,
    data,
    createOption(query, 'weapi'),
  )
}
