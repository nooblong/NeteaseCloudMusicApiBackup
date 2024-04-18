module.exports = (query, request) => {
  const data = {
    ids: query.ids,
  }
  return request(
    'POST',
    'https://interface.music.163.com/api/content/voice/delete',
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
