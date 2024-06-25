// 推荐MV

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `/api/personalized/mv`,
    {},
    createOption(query, 'weapi'),
  )
}
