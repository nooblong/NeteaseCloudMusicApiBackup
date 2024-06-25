const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/api/usertool/task/todo/query`,
    data,
    createOption(query, 'weapi'),
  )
}
