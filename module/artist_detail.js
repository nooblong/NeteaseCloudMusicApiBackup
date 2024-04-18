module.exports = (query, request) => {
  query.cookie.os = 'ios'
  query.cookie.appver = '9.0.65'
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
