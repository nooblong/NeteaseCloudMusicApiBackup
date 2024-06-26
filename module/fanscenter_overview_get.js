// 粉丝数量
const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `/api/fanscenter/overview/get`,
    data,
    createOption(query),
  )
}
