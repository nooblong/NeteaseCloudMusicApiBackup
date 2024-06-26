// 所有榜单介绍

const createOption = require('../util/option.js')
module.exports = (query, request) => {
  return request('POST', `/api/toplist`, {}, createOption(query))
}
