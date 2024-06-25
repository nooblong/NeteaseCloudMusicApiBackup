// 曲风详情

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    tagId: query.tagId,
  }
  return request(
    'POST',
    `https://music.163.com/api/style-tag/home/head`,
    data,
    createOption(query, 'weapi'),
  )
}
