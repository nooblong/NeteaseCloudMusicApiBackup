// 删除动态

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.evId,
  }
  return request('POST', `https://music.163.com/eapi/event/delete`, data, {
    crypto: 'weapi',
    cookie: query.cookie,
    ua: query.ua || '',
    proxy: query.proxy,
    realIP: query.realIP,
  })
}
