// 每日推荐歌曲

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  query.cookie.os = 'ios'
  const data = {}
  return request(
    'POST',
    `https://music.163.com/api/v3/discovery/recommend/songs`,
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
