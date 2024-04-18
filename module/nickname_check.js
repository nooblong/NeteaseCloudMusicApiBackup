module.exports = (query, request) => {
  const data = {
    nickname: query.nickname,
  }
  return request(
    'POST',
    `https://music.163.com/api/nickname/duplicated`,
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
