const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `/api/playlist/video/recent`,
    data,
    createOption(query, 'weapi'),
  )
}
