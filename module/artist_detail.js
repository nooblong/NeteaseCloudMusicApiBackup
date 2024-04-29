module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/api/artist/head/info/get`,
    {
      id: query.id,
    },
    {
      crypto: 'weapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
