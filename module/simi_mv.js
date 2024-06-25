// 相似MV

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    mvid: query.mvid,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/discovery/simiMV`,
    data,
    createOption(query, 'weapi'),
  )
}
