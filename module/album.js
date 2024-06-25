// 专辑内容

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/v1/album/${query.id}`,
    {},
    createOption(query, 'weapi'),
  )
}
