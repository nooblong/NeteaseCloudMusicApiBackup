// 删除歌单

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  query.cookie.appver = '2.9.7'
  const data = {
    ids: '[' + query.id + ']',
  }
  return request('POST', `https://music.163.com/weapi/playlist/remove`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    ua: query.ua || '',
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
