// 歌手动态信息

module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/artist/detail/dynamic`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      url: '/api/artist/detail/dynamic',
      realIP: query.realIP,
    },
  )
}
