// 云盘歌曲删除

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    songIds: [query.id],
  }
  return request(
    'POST',
    `https://music.163.com/weapi/cloud/del`,
    data,
    createOption(query, 'weapi'),
  )
}
