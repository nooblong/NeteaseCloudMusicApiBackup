// 独家放送

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/weapi/personalized/privatecontent`,
    {},
    createOption(query, 'weapi'),
  )
}
