// 乐谱预览
const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(
    'POST',
    `/api/music/sheet/preview/info`,
    data,
    createOption(query),
  )
}
