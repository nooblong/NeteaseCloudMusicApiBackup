// 转发动态

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  query.cookie.appver = '2.9.7'
  const data = {
    forwards: query.forwards,
    id: query.evId,
    eventUserId: query.uid,
  }
  return request(
    'POST',
    `/api/event/forward`,
    data,
    createOption(query, 'weapi'),
  )
}
