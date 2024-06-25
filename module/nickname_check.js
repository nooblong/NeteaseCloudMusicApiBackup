const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    nickname: query.nickname,
  }
  return request(
    'POST',
    `https://music.163.com/api/nickname/duplicated`,
    data,
    createOption(query, 'weapi'),
  )
}
