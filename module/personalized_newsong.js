// 推荐新歌

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  query.cookie.appver = '2.9.7'
  const data = {
    type: 'recommend',
    limit: query.limit || 10,
    areaId: query.areaId || 0,
  }
  return request(
    'POST',
    `https://music.163.com/api/personalized/newsong`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
