// 曲风列表

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `/api/tag/list/get`,
    data,
    createOption(query, 'weapi'),
  )
}
