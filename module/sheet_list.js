// 乐谱列表
const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.id,
    abTest: query.ab || 'b',
  }
  return request('POST', `/api/music/sheet/list/v1`, data, createOption(query))
}
