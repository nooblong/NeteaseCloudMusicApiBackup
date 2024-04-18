// 删除歌单

module.exports = (query, request) => {
  query.cookie.os = 'pc'
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
