// 云随机播放
module.exports = (query, request) => {
  const data = {
    ids: query.ids,
  }
  return request(
    'POST',
    `https://interface3.music.163.com/eapi/playmode/song/vector/get`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/playmode/song/vector/get',
    },
  )
}
