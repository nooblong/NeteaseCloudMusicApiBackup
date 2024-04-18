// 最新专辑

module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/api/discovery/newAlbum`,
    {},
    {
      crypto: 'weapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
