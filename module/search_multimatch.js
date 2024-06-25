// 多类型搜索

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    type: query.type || 1,
    s: query.keywords || '',
  }
  return request(
    'POST',
    `https://music.163.com/weapi/search/suggest/multimatch`,
    data,
    createOption(query, 'weapi'),
  )
}
