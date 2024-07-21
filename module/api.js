const { cookieToJson } = require('../util/index')
const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const method = query.method || 'POST'
  const uri = query.uri
  let data = {}
  try {
    data =
      typeof query.data === 'string' ? JSON.parse(query.data) : query.data || {}
    if (typeof data.cookie === 'string') {
      data.cookie = cookieToJson(data.cookie)
      query.cookie = data.cookie
    }
  } catch (e) {
    data = {}
  }

  const crypto = query.crypto || ''

  const res = request(method, uri, data, createOption(query, crypto))
  return res
}
