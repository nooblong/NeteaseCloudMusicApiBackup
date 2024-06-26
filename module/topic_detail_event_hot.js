const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    actid: query.actid,
  }
  return request(
    'POST',
    `/api/act/event/hot`,
    data,
    createOption(query, 'weapi'),
  )
}
