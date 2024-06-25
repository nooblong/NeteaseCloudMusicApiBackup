// 网易出品

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    offset: query.offset || 0,
    limit: query.limit || 30,
  }
  return request(
    'POST',
    `https://interface.music.163.com/api/mv/exclusive/rcmd`,
    data,
    createOption(query, 'weapi'),
  )
}
