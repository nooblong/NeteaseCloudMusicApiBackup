// 全部视频列表

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    groupId: 0,
    offset: query.offset || 0,
    need_preview_url: 'true',
    total: true,
  }
  //   /api/videotimeline/otherclient/get
  return request(
    'POST',
    `https://music.163.com/api/videotimeline/otherclient/get`,
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
