// 独家放送

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `/api/personalized/privatecontent`,
    {},
    createOption(query, 'weapi'),
  )
}
