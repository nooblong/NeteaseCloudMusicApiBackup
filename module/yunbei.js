const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  // /api/point/today/get
  return request(
    'POST',
    `https://music.163.com/api/point/signed/get`,
    data,
    createOption(query, 'weapi'),
  )
}
