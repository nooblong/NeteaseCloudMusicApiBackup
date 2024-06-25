// 会员任务

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/weapi/vipnewcenter/app/level/task/list`,
    data,
    createOption(query, 'weapi'),
  )
}
