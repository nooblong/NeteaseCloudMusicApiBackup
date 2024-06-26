// 回忆坐标

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    songId: query.id,
  }
  return request(
    'POST',
    `/api/content/activity/music/first/listen/info`,
    data,
    createOption(query),
  )
}
