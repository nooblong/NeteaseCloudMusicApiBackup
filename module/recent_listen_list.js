// 最近听歌列表

module.exports = (query, request) => {
  const data = {}
  return request(
    'POST',
    `https://interface.music.163.com/eapi/pc/recent/listen/list`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      url: '/api/pc/recent/listen/list',
      realIP: query.realIP,
    },
  )
}
