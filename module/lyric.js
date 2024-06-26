// 歌词

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  query.cookie.os = 'ios'

  const data = {
    id: query.id,
    tv: -1,
    lv: -1,
    rv: -1,
    kv: -1,
    _nmclfl: 1,
  }
  return request('POST', `/api/song/lyric`, data, createOption(query))
}
