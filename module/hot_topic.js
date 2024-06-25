//热门话题

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 20,
    offset: query.offset || 0,
  }
  return request(
    'POST',
    `https://music.163.com/api/act/hot`,
    data,
    createOption(query, 'weapi'),
  )
}
