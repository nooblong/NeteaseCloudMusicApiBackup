// 热门搜索

module.exports = (query, request) => {
  const data = {
    type: 1111,
  }
  return request('POST', `https://music.163.com/weapi/search/hot`, data, {
    crypto: 'weapi',
    uaType: 'mobile',
    cookie: query.cookie,
    ua: query.ua || '',
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
