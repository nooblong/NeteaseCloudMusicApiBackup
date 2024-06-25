const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    nickname: query.nickname,
  }
  return request(
    'POST',
    `/api/nickname/duplicated`,
    data,
    createOption(query, 'weapi'),
  )
}
