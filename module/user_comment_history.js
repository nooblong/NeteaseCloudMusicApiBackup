const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    compose_reminder: 'true',
    compose_hot_comment: 'true',
    limit: query.limit || 10,
    user_id: query.uid,
    time: query.time || 0,
  }
  return request(
    'POST',
    `https://music.163.com/api/comment/user/comment/history`,
    data,
    createOption(query, 'weapi'),
  )
}
