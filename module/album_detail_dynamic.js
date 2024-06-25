// 专辑动态信息
const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(
    'POST',
    `https://music.163.com/api/album/detail/dynamic`,
    data,
    createOption(query, 'weapi'),
  )
}
