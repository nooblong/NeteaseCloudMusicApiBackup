// 付费电台

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 30,
    offset: query.offset || 0,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/djradio/home/paygift/list?_nmclfl=1`,
    data,
    createOption(query, 'weapi'),
  )
}
