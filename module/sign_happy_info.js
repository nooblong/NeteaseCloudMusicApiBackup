const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `/api/sign/happy/info`,
    data,
    createOption(query, 'weapi'),
  )
}
