const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const method = query.method || 'POST'
  const uri = query.uri
  let data = {}
  try {
    data =
      typeof query.data === 'string' ? JSON.parse(query.data) : query.data || {}
  } catch (e) {
    data = {}
  }

  const crypto = query.crypto || ''

  const res = request(method, uri, data, createOption(query, crypto))
  return res
}
