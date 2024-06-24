// 云盘数据详情

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const id = query.id.replace(/\s/g, '').split(',')
  const data = {
    songIds: id,
  }
  return request(
    'POST',
    `https://music.163.com/weapi/v1/cloud/get/byids`,
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
