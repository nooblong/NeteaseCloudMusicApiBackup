// 相似MV

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    mvid: query.mvid,
  }
  return request(
    'POST',
    `/api/discovery/simiMV`,
    data,
    createOption(query, 'weapi'),
  )
}
