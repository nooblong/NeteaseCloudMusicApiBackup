const createOption = require('../util/option.js')
module.exports = (query, request) => {
  const data = {
    limit: query.limit || '200',
    offset: query.offset || '0',
    voiceListId: query.voiceListId,
  }
  return request(
    'POST',
    `https://interface.music.163.com/weapi/voice/workbench/voices/by/voicelist`,
    data,
    createOption(query, 'weapi'),
  )
}
