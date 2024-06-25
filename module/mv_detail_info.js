// MV 点赞转发评论数数据

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    threadid: `R_MV_5_${query.mvid}`,
    composeliked: true,
  }
  return request(
    'POST',
    `/api/comment/commentthread/info`,
    data,
    createOption(query, 'weapi'),
  )
}
