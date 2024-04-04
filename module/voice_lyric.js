module.exports = (query, request) => {
  const data = {
    programId: query.id,
  }
  return request(
    'POST',
    `https://interface3.music.163.com/eapi/voice/lyric/get?programId=${query.id}`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/voice/lyric/get',
    },
  )
}
