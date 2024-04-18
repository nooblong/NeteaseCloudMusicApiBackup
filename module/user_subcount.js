// 收藏计数

module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/subcount`,
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
