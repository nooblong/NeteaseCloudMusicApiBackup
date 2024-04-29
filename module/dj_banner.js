// 电台banner

module.exports = (query, request) => {
  query.cookie.os = 'pc'
  query.cookie.appver = '2.9.7'
  return request(
    'POST',
    `https://music.163.com/weapi/djradio/banner/get`,
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
