// 默认搜索关键词

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `/api/search/defaultkeyword/get`,
    {},
    createOption(query),
  )
}
