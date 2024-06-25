const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 100,
  }
  return request(
    'POST',
    `https://music.163.com/api/play-record/newvideo/list`,
    data,
    createOption(query, 'weapi'),
  )
}
