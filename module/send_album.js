// 私信专辑

module.exports = (query, request) => {
  query.cookie.os = 'ios'
  query.cookie.appver = '9.0.65'
  const data = {
    id: query.id,
    msg: query.msg || '',
    type: 'album',
    userIds: '[' + query.user_ids + ']',
  }
  return request('POST', `https://music.163.com/api/msg/private/send`, data, {
    crypto: 'api',
    cookie: query.cookie,
    ua: query.ua || '',
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
