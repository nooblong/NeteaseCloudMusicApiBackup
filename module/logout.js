// 退出登录

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/logout`,
    {},
    {
      ...createOption(query, 'weapi'),
      uaType: 'pc',
    },
  )
}
