const createOption = require('../util/option.js')
module.exports = async (query, request) => {
  const data = {
    qrCode: query.qr,
  }
  const res = await request(
    'POST',
    `https://music.163.com/weapi/frontrisk/verify/qrcodestatus`,
    data,
    createOption(query, 'weapi'),
  )
  return res
}
