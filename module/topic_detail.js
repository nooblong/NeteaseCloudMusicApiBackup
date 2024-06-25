const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    actid: query.actid,
  }
  return request(
    'POST',
    `https://music.163.com/api/act/detail`,
    data,
    createOption(query, 'weapi'),
  )
}
