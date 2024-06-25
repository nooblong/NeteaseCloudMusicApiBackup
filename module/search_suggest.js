// 搜索建议

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    s: query.keywords || '',
  }
  let type = query.type == 'mobile' ? 'keyword' : 'web'
  return request(
    'POST',
    `/api/search/suggest/` + type,
    data,
    createOption(query, 'weapi'),
  )
}
