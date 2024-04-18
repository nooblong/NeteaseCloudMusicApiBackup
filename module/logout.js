// 退出登录

module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/logout`,
    {},
    {
      crypto: 'weapi',
      uaType: 'pc',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
