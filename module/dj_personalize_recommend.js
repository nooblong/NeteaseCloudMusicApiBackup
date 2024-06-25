// 电台个性推荐

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request(
    'POST',
    `https://music.163.com/api/djradio/personalize/rcmd`,
    {
      limit: query.limit || 6,
    },
    createOption(query, 'weapi'),
  )
}
