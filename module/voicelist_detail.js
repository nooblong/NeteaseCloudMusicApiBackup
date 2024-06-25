const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    id: query.id,
  }
  return request(
    'POST',
    `/api/voice/workbench/voicelist/detail`,
    data,
    createOption(query),
  )
}
