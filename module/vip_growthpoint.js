// 会员成长值

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/weapi/vipnewcenter/app/level/growhpoint/basic`,
    data,
    createOption(query, 'weapi'),
  )
}
