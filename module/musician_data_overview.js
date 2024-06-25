// 音乐人数据概况

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/weapi/creator/musician/statistic/data/overview/get`,
    data,
    createOption(query, 'weapi'),
  )
}
