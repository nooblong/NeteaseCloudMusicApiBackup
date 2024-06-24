// 视频链接

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    ids: '["' + query.id + '"]',
    resolution: query.res || 1080,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/cloudvideo/playurl`,
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
