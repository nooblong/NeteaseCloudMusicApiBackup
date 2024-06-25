const createOption = require('../util/option.js')
module.exports = async (query, request) => {
  query.cookie.os = 'pc'
  query.cookie.appver = '2.9.7'
  query.ids = query.ids || ''
  const data = {
    id: query.pid,
    tracks: JSON.stringify(
      query.ids.split(',').map((item) => {
        return { type: 3, id: item }
      }),
    ),
  }
  console.log(data)

  return request(
    'POST',
    `/api/playlist/track/add`,
    data,
    createOption(query, 'weapi'),
  )
}
