// 视频标签列表

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `/api/cloudvideo/group/list`,
    data,
    createOption(query, 'weapi'),
  )
}
