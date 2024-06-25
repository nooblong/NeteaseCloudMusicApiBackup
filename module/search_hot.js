// 热门搜索

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    type: 1111,
  }
  return request('POST', `https://music.163.com/weapi/search/hot`, data, {
    ...createOption(query, 'weapi'),
    uaType: 'mobile',
  })
}
