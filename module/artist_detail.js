const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/api/artist/head/info/get`,
    {
      id: query.id,
    },
    createOption(query, 'weapi'),
  )
}
