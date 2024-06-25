const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/api/pointmall/user/sign`,
    data,
    createOption(query, 'weapi'),
  )
}
