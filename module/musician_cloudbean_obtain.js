// 领取云豆

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    userMissionId: query.id,
    period: query.period,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/nmusician/workbench/mission/reward/obtain/new`,
    data,
    createOption(query, 'weapi'),
  )
}
