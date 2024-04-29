// 手机登录

const CryptoJS = require('crypto-js')

module.exports = async (query, request) => {
  const data = {
    phone: query.phone,
    countrycode: query.countrycode || '86',
    captcha: query.captcha,
    [query.captcha ? 'captcha' : 'password']: query.captcha
      ? query.captcha
      : query.md5_password || CryptoJS.MD5(query.password).toString(),
    rememberLogin: 'true',
  }
  let result = await request(
    'POST',
    `https://music.163.com/weapi/login/cellphone`,
    data,
    {
      crypto: 'weapi',
      uaType: 'pc',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )

  if (result.body.code === 200) {
    result = {
      status: 200,
      body: {
        ...JSON.parse(
          JSON.stringify(result.body).replace(
            /avatarImgId_str/g,
            'avatarImgIdStr',
          ),
        ),
        cookie: result.cookie.join(';'),
      },
      cookie: result.cookie,
    }
  }
  return result
}
