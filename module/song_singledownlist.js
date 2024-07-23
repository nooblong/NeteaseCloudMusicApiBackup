// 已购买单曲

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    limit: query.limit || '20',
    offset: query.offset || '0',
    total: 'true',
  }
  return request(
    'POST',
    `/api/member/song/singledownlist`,
    data,
    createOption(query),
  )
}
