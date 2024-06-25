// 会员成长值领取记录

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 20,
    offset: query.offset || 0,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/vipnewcenter/app/level/growth/details`,
    data,
    createOption(query, 'weapi'),
  )
}
