// 热门歌单分类

module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/playlist/hottags`,
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
