module.exports = (query, request) => {
  const data = {
    limit: query.limit || 20,
    startTimestamp: query.before || Date.now(),
  }
  return request(
    'POST',
    `https://music.163.com/api/sub/artist/new/works/mv/list`,
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
