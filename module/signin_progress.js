// 签到进度

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    moduleId: query.moduleId || '1207signin-1207signin',
  }
  return request(
    'POST',
    `https://music.163.com/weapi/act/modules/signin/v2/progress`,
    data,
    createOption(query, 'weapi'),
  )
}
