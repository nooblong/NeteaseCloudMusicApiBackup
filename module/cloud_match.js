module.exports = (query, request) => {
  const data = {
    userId: query.uid,
    songId: query.sid,
    adjustSongId: query.asid,
  }
  return request(
    'POST',
    `https://music.163.com/api/cloud/user/song/match`,
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
