// 音乐人签到

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/weapi/creator/user/access`,
    data,
    createOption(query, 'weapi'),
  )
}
