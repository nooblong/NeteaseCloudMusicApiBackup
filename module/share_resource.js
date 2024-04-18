// 分享歌曲到动态

module.exports = (query, request) => {
  query.cookie.os = 'ios'
  query.cookie.appver = '9.0.65'
  const data = {
    type: query.type || 'song', // song,playlist,mv,djprogram,djradio,noresource
    msg: query.msg || '',
    id: query.id || '',
  }
  return request(
    'POST',
    `https://music.163.com/weapi/share/friends/resource`,
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
