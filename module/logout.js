// 退出登录

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `/api/logout`,
    {},
    {
      ...createOption(query, 'weapi'),
      uaType: 'pc',
    },
  )
}
