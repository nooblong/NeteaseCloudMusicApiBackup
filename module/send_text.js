// 私信

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    type: 'text',
    msg: query.msg,
    userIds: '[' + query.user_ids + ']',
  }
  return request(
    'POST',
    `https://music.163.com/weapi/msg/private/send`,
    data,
    createOption(query, 'weapi'),
  )
}
