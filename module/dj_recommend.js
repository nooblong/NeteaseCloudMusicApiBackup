// 精选电台

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `/api/djradio/recommend/v1`,
    {},
    createOption(query, 'weapi'),
  )
}
