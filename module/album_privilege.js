// 获取专辑歌曲的音质

module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(
    'POST',
    `https://interface.music.163.com/eapi/album/privilege`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      url: '/api/album/privilege',
      realIP: query.realIP,
    },
  )
}
