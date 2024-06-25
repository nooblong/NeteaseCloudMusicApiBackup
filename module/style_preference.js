// 曲风偏好

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/api/tag/my/preference/get`,
    data,
    createOption(query, 'weapi'),
  )
}
