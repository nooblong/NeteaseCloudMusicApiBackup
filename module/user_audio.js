// 用户创建的电台

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    userId: query.uid,
  }
  return request(
    'POST',
    `/api/djradio/get/byuser`,
    data,
    createOption(query, 'weapi'),
  )
}
