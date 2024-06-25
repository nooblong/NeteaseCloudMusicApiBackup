const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    nicknames: query.nicknames,
  }
  return request(
    'POST',
    `/api/user/getUserIds`,
    data,
    createOption(query, 'weapi'),
  )
}
