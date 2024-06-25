const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 20,
    startTimestamp: query.before || Date.now(),
  }
  return request(
    'POST',
    `/api/sub/artist/new/works/song/list`,
    data,
    createOption(query, 'weapi'),
  )
}
