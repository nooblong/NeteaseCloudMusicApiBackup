const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    ids: query.ids,
  }
  return request('POST', '/api/content/voice/delete', data, createOption(query))
}
