const { resourceTypeMap } = require('../util/config.json')
module.exports = (query, request) => {
  query.type = resourceTypeMap[query.type || 0]
  const threadId = query.type + query.sid
  const data = {
    targetUserId: query.uid,
    commentId: query.cid,
    cursor: query.cursor || '-1',
    threadId: threadId,
    pageNo: query.page || 1,
    idCursor: query.idCursor || -1,
    pageSize: query.pageSize || 100,
  }
  return request(
    'POST',
    `https://music.163.com/api/v2/resource/comments/hug/list`,
    data,
    {
      crypto: 'api',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
