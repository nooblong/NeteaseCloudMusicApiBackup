const encrypt = require('./crypto')
const CryptoJS = require('crypto-js')
const { default: axios } = require('axios')
const { PacProxyAgent } = require('pac-proxy-agent')
const http = require('http')
const https = require('https')
const tunnel = require('tunnel')
const fs = require('fs')
const path = require('path')
const tmpPath = require('os').tmpdir()
const { cookieToJson, cookieObjToString } = require('./index')
const anonymous_token = fs.readFileSync(
  path.resolve(tmpPath, './anonymous_token'),
  'utf-8',
)
const { URLSearchParams, URL } = require('url')
const iosAppVersion = '9.0.65'
const { APP_CONF } = require('../util/config.json')
// request.debug = true // 开启可看到更详细信息

const chooseUserAgent = (uaType) => {
  const userAgentMap = {
    mobile:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4.1 Mobile/15E148 Safari/604.1',
    pc: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0',
  }
  if (uaType === 'mobile') {
    return userAgentMap.mobile
  }
  return userAgentMap.pc
}
const createRequest = (method, uri, data = {}, options) => {
  const cookie = options.cookie || {}
  return new Promise((resolve, reject) => {
    let headers = {
      'User-Agent': options.ua || chooseUserAgent(options.uaType),
      os: cookie.os || 'ios',
      appver: cookie.appver || (cookie.os != 'pc' ? iosAppVersion : ''),
    }
    options.headers = options.headers || {}
    headers = {
      ...headers,
      ...options.headers,
    }
    if (method.toUpperCase() === 'POST')
      headers['Content-Type'] = 'application/x-www-form-urlencoded'
    let ip = options.realIP || options.ip || ''
    // console.log(ip)
    if (ip) {
      headers['X-Real-IP'] = ip
      headers['X-Forwarded-For'] = ip
    }
    // headers['X-Real-IP'] = '118.88.88.88'
    if (typeof options.cookie === 'object') {
      options.cookie = {
        ...options.cookie,
        __remember_me: true,
        // NMTID: CryptoJS.lib.WordArray.random(16).toString(),
        _ntes_nuid: CryptoJS.lib.WordArray.random(16).toString(),
        os: options.cookie.os || 'ios',
        appver:
          options.cookie.appver || (cookie.os != 'pc' ? iosAppVersion : ''),
      }
      if (uri.indexOf('login') === -1) {
        options.cookie['NMTID'] = CryptoJS.lib.WordArray.random(16).toString()
      }
      if (!options.cookie.MUSIC_U) {
        // 游客
        if (!options.cookie.MUSIC_A) {
          options.cookie.MUSIC_A = anonymous_token
        }
      }
      headers['Cookie'] = cookieObjToString(options.cookie)
    } else if (options.cookie) {
      // cookie string
      const cookie = cookieToJson(options.cookie)
      cookie.os = cookie.os || 'ios'
      cookie.appver = cookie.appver || (cookie.os != 'pc' ? iosAppVersion : '')
      headers['Cookie'] = cookieObjToString(cookie)
    } else {
      const cookie = cookieToJson('__remember_me=true; NMTID=xxx')
      cookie.os = cookie.os || 'ios'
      cookie.appver = cookie.appver || (cookie.os != 'pc' ? iosAppVersion : '')
      headers['Cookie'] = cookieObjToString(cookie)
    }
    // console.log(options.cookie, headers['Cookie'])

    let url = ''
    // 目前任意uri都支持三种加密方式
    if (options.crypto === 'weapi') {
      headers['Referer'] = 'https://music.163.com'
      headers['User-Agent'] = options.ua || chooseUserAgent('pc')
      let csrfToken = (headers['Cookie'] || '').match(/_csrf=([^(;|$)]+)/)
      data.csrf_token = csrfToken ? csrfToken[1] : ''
      data = encrypt.weapi(data)
      url = APP_CONF.domain + '/weapi/' + uri.substr(5)
    } else if (options.crypto === 'linuxapi') {
      headers['User-Agent'] =
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36'
      data = encrypt.linuxapi({
        method: method,
        url: APP_CONF.apiDomain + uri,
        params: data,
      })
      url = 'https://music.163.com/api/linux/forward'
    } else if (
      options.crypto === 'eapi' ||
      options.crypto === 'api' ||
      options.crypto === ''
    ) {
      // 两种加密方式，都应生成客户端的cookie
      const cookie = options.cookie || {}
      const csrfToken = cookie['__csrf'] || ''
      const header = {
        osver: cookie.osver || '17.4.1', //系统版本
        deviceId: cookie.deviceId || global.deviceId,
        appver: cookie.appver || iosAppVersion, // app版本
        versioncode: cookie.versioncode || '140', //版本号
        mobilename: cookie.mobilename || '', //设备model
        buildver: cookie.buildver || Date.now().toString().substr(0, 10),
        resolution: cookie.resolution || '1920x1080', //设备分辨率
        __csrf: csrfToken,
        os: cookie.os || 'ios',
        channel: cookie.channel || '',
        requestId: `${Date.now()}_${Math.floor(Math.random() * 1000)
          .toString()
          .padStart(4, '0')}`,
      }
      if (cookie.MUSIC_U) header['MUSIC_U'] = cookie.MUSIC_U
      if (cookie.MUSIC_A) header['MUSIC_A'] = cookie.MUSIC_A
      headers['Cookie'] = Object.keys(header)
        .map(
          (key) =>
            encodeURIComponent(key) + '=' + encodeURIComponent(header[key]),
        )
        .join('; ')

      let eapiEncrypt = () => {
        data.header = header
        data = encrypt.eapi(uri, data)
        url = APP_CONF.apiDomain + '/eapi/' + uri.substr(5)
      }
      if (options.crypto === 'eapi') {
        eapiEncrypt()
      } else if (options.crypto === 'api') {
        url = APP_CONF.apiDomain + uri
      } else if (options.crypto === '') {
        // 加密方式为空，以配置文件的加密方式为准
        if (APP_CONF.encrypt) {
          eapiEncrypt()
        } else url = APP_CONF.apiDomain + uri
      }
    } else {
      // 未知的加密方式
      console.log('[ERR]', 'Unknown Crypto:', options.crypto)
    }
    const answer = { status: 500, body: {}, cookie: [] }
    // console.log(headers, 'headers')
    let settings = {
      method: method,
      url: url,
      headers: headers,
      data: new URLSearchParams(data).toString(),
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
    }

    if (options.proxy) {
      if (options.proxy.indexOf('pac') > -1) {
        settings.httpAgent = new PacProxyAgent(options.proxy)
        settings.httpsAgent = new PacProxyAgent(options.proxy)
      } else {
        const purl = new URL(options.proxy)
        if (purl.hostname) {
          const agent = tunnel[
            purl.protocol === 'https' ? 'httpsOverHttp' : 'httpOverHttp'
          ]({
            proxy: {
              host: purl.hostname,
              port: purl.port || 80,
              proxyAuth:
                purl.username && purl.password
                  ? purl.username + ':' + purl.password
                  : '',
            },
          })
          settings.httpsAgent = agent
          settings.httpAgent = agent
          settings.proxy = false
        } else {
          console.error('代理配置无效,不使用代理')
        }
      }
    } else {
      settings.proxy = false
    }
    axios(settings)
      .then((res) => {
        const body = res.data
        answer.cookie = (res.headers['set-cookie'] || []).map((x) =>
          x.replace(/\s*Domain=[^(;|$)]+;*/, ''),
        )
        try {
          answer.body = JSON.parse(body.toString())
          if (answer.body.code) {
            answer.body.code = Number(answer.body.code)
          }

          answer.status = Number(answer.body.code || res.status)
          if (
            [201, 302, 400, 502, 800, 801, 802, 803].indexOf(answer.body.code) >
            -1
          ) {
            // 特殊状态码
            answer.status = 200
          }
        } catch (e) {
          // console.log(e)
          try {
            answer.body = JSON.parse(encrypt.decrypt(body))
          } catch (err) {
            // console.log(err)
            // can't decrypt and can't parse directly
            answer.body = body
          }
          answer.status = res.status
        }

        answer.status =
          100 < answer.status && answer.status < 600 ? answer.status : 400
        if (answer.status === 200) resolve(answer)
        else reject(answer)
      })
      .catch((err) => {
        answer.status = 502
        answer.body = { code: 502, msg: err }
        reject(answer)
      })
  })
}

module.exports = createRequest
