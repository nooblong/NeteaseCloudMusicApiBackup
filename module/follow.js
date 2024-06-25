// 关注与取消关注用户

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  query.cookie.os = 'pc'
  query.cookie.appver = '2.9.7'
  query.t = query.t == 1 ? 'follow' : 'delfollow'
  return request(
    'POST',
    `/api/user/${query.t}/${query.id}`,
    {},
    createOption(query, 'weapi'),
  )
}
