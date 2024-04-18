// 热搜列表
module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://music.163.com/weapi/hotsearchlist/get`,
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
