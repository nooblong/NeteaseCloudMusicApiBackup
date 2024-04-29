// 转发动态

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  query.cookie.appver = '2.9.7'
  const data = {
    forwards: query.forwards,
    id: query.evId,
    eventUserId: query.uid,
  }
  return request('POST', `https://music.163.com/weapi/event/forward`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    ua: query.ua || '',
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
