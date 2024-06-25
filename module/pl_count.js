// 私信和通知接口
const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request('POST', `/api/pl/count`, data, createOption(query, 'weapi'))
}
