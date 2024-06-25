// 视频标签列表

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/api/cloudvideo/group/list`,
    data,
    createOption(query, 'weapi'),
  )
}
