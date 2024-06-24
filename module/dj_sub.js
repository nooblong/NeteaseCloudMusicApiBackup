// 订阅与取消电台

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  query.t = query.t == 1 ? 'sub' : 'unsub'
  const data = {
    id: query.rid,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/djradio/${query.t}`,
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
