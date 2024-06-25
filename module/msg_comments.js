// 评论

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    beforeTime: query.before || '-1',
    limit: query.limit || 30,
    total: 'true',
    uid: query.uid,
  }

  return request(
    'POST',
    `https://music.163.com/api/v1/user/comments/${query.uid}`,
    data,
    createOption(query, 'weapi'),
  )
}
