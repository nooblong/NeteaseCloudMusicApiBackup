// 操作记录

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/feedback/weblog`,
    query.data || {},
    createOption(query, 'weapi'),
  )
}
