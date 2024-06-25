const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `/api/point/today/get`,
    data,
    createOption(query, 'weapi'),
  )
}
