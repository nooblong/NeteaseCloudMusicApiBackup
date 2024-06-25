// 电台今日优选

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    page: query.page || 0,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/djradio/home/today/perfered`,
    data,
    createOption(query, 'weapi'),
  )
}
