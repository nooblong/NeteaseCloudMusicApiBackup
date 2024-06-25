const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `/api/nuser/account/get`,
    data,
    createOption(query, 'weapi'),
  )
}
