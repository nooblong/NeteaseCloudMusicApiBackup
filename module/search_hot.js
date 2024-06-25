// 热门搜索

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    type: 1111,
  }
  return request('POST', `/api/search/hot`, data, {
    ...createOption(query, 'weapi'),
    uaType: 'mobile',
  })
}
