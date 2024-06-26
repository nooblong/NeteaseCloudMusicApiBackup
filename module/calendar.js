const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    startTime: query.startTime || Date.now(),
    endTime: query.endTime || Date.now(),
  }
  return request(
    'POST',
    `/api/mcalendar/detail`,
    data,
    createOption(query, 'weapi'),
  )
}
