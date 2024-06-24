const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    limit: query.limit || 10,
    offset: query.offset || 0,
  }
  return request('POST', `/api/point/receipt`, data, createOption(query))
}
