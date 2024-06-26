const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `/api/artist/head/info/get`,
    {
      id: query.id,
    },
    createOption(query, 'weapi'),
  )
}
