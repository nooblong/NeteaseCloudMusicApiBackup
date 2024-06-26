// 收藏计数

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request('POST', `/api/subcount`, {}, createOption(query, 'weapi'))
}
