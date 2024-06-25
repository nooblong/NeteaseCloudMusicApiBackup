const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    ids: query.ids,
  }
  return request(
    'POST',
    'https://interface.music.163.com/api/content/voice/delete',
    data,
    createOption(query, 'weapi'),
  )
}
