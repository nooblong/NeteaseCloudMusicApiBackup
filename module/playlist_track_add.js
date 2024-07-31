const createOption = require('../util/option.js')
module.exports = async (query, request) => {
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

  return request(`/api/playlist/track/add`, data, createOption(query, 'weapi'))
}
