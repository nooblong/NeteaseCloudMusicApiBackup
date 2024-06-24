// 更新歌单标签

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.id,
    tags: query.tags,
  }
  return request('POST', `/api/playlist/tags/update`, data, createOption(query))
}
