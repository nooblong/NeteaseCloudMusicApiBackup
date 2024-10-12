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
const { cookieToJson, cookieObjToString, toBoolean } = require('./index')
const anonymous_token = fs.readFileSync(
  path.resolve(tmpPath, './anonymous_token'),
  'utf-8',
)
const { URLSearchParams, URL } = require('url')
const { APP_CONF } = require('../util/config.json')
// request.debug = true // 开启可看到更详细信息

const WNMCID = (function () {
  const characters = 'abcdefghijklmnopqrstuvwxyz'
  let randomString = ''
  for (let i = 0; i < 6; i++)
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length),
    )
  return `${randomString}.${Date.now().toString()}.01.0`
})()

const osMap = {
  pc: {
    os: 'pc',
    appver: '3.0.18.203152',
    osver: 'Microsoft-Windows-10-Professional-build-22631-64bit',
    channel: 'netease',
  },
  linux: {
    os: 'linux',
    appver: '1.2.1.0428',
    osver: 'Deepin 20.9',
    channel: 'netease',
  },
  android: {
    os: 'android',
    appver: '8.20.20.231215173437',
    osver: '14',
    channel: 'xiaomi',
  },
  iphone: {
    os: 'iOS',
    appver: '9.0.90',
    osver: '16.2',
    channel: 'distribution',
  },
}

const chooseUserAgent = (crypto, uaType = 'pc') => {
  const userAgentMap = {
    weapi: {
      pc: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0',
    },
    linuxapi: {
      linux:
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
    },
    api: {
      pc: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Safari/537.36 Chrome/91.0.4472.164 NeteaseMusicDesktop/3.0.18.203152',
      android:
        'NeteaseMusic/9.1.65.240927161425(9001065);Dalvik/2.1.0 (Linux; U; Android 14; 23013RK75C Build/UKQ1.230804.001)',
      iphone: 'NeteaseMusic 9.0.90/5038 (iPhone; iOS 16.2; zh_CN)',
    },
  }
  return userAgentMap[crypto][uaType] || ''
}
const createRequest = (uri, data, options) => {
  return new Promise((resolve, reject) => {
    let headers = options.headers || {}
    let ip = options.realIP || options.ip || ''
    // console.log(ip)
    if (ip) {
      headers['X-Real-IP'] = ip
      headers['X-Forwarded-For'] = ip
    }
    // headers['X-Real-IP'] = '118.88.88.88'

    let cookie = options.cookie || {}
    if (typeof cookie === 'string') {
      cookie = cookieToJson(cookie)
    }
    if (typeof cookie === 'object') {
      let _ntes_nuid = CryptoJS.lib.WordArray.random(32).toString()
      let os = osMap[cookie.os] || osMap['iphone']
      cookie = {
        ...cookie,
        __remember_me: 'true',
        // NMTID: CryptoJS.lib.WordArray.random(16).toString(),
        ntes_kaola_ad: '1',
        _ntes_nuid: cookie._ntes_nuid || _ntes_nuid,
        _ntes_nnid:
          cookie._ntes_nnid || `${_ntes_nuid},${Date.now().toString()}`,
        WNMCID: cookie.WNMCID || WNMCID,
        WEVNSM: cookie.WEVNSM || '1.0.0',

        osver: cookie.osver || os.osver,
        deviceId: cookie.deviceId || global.deviceId,
        os: cookie.os || os.os,
        channel: cookie.channel || os.channel,
        appver: cookie.appver || os.appver,
      }
      if (uri.indexOf('login') === -1) {
        cookie['NMTID'] = CryptoJS.lib.WordArray.random(16).toString()
      }
      if (!cookie.MUSIC_U) {
        // 游客
        cookie.MUSIC_A = cookie.MUSIC_A || anonymous_token
      }
      headers['Cookie'] = cookieObjToString(cookie)
    }

    let url = '',
      encryptData = '',
      crypto = options.crypto,
      csrfToken = cookie['__csrf'] || ''

    if (crypto === '') {
      // 加密方式为空，以配置文件的加密方式为准
      if (APP_CONF.encrypt) {
        crypto = 'eapi'
      } else {
        crypto = 'api'
      }
    }

    // 根据加密方式加密请求数据；目前任意uri都支持四种加密方式
    switch (crypto) {
      case 'weapi':
        headers['Referer'] = APP_CONF.domain
        headers['User-Agent'] = options.ua || chooseUserAgent('weapi')
        data.csrf_token = csrfToken
        encryptData = encrypt.weapi(data)
        url = APP_CONF.domain + '/weapi/' + uri.substr(5)
        break

      case 'linuxapi':
        headers['User-Agent'] =
          options.ua || chooseUserAgent('linuxapi', 'linux')
        encryptData = encrypt.linuxapi({
          method: 'POST',
          url: APP_CONF.domain + uri,
          params: data,
        })
        url = APP_CONF.domain + '/api/linux/forward'
        break

      case 'eapi':
      case 'api':
        // 两种加密方式，都应生成客户端的cookie
        const header = {
          osver: cookie.osver, //系统版本
          deviceId: cookie.deviceId,
          os: cookie.os, //系统类型
          appver: cookie.appver, // app版本
          versioncode: cookie.versioncode || '140', //版本号
          mobilename: cookie.mobilename || '', //设备model
          buildver: cookie.buildver || Date.now().toString().substr(0, 10),
          resolution: cookie.resolution || '1920x1080', //设备分辨率
          __csrf: csrfToken,
          channel: cookie.channel, //下载渠道
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
        headers['User-Agent'] = options.ua || chooseUserAgent('api', 'iphone')

        if (crypto === 'eapi') {
          // 使用eapi加密
          data.header = header
          data.e_r =
            options.e_r != undefined
              ? options.e_r
              : data.e_r != undefined
              ? data.e_r
              : APP_CONF.encryptResponse // 用于加密接口返回值
          data.e_r = toBoolean(data.e_r)
          encryptData = encrypt.eapi(uri, data)
          url = APP_CONF.apiDomain + '/eapi/' + uri.substr(5)
        } else if (crypto === 'api') {
          // 不使用任何加密
          url = APP_CONF.apiDomain + uri
          encryptData = data
        }
        break

      default:
        // 未知的加密方式
        console.log('[ERR]', 'Unknown Crypto:', crypto)
        break
    }
    const answer = { status: 500, body: {}, cookie: [] }
    // console.log(headers, 'headers')
    let settings = {
      method: 'POST',
      url: url,
      headers: headers,
      data: new URLSearchParams(encryptData).toString(),
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
    }

    if (data.e_r) {
      settings = {
        ...settings,
        encoding: null,
        responseType: 'arraybuffer',
      }
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
          if (data.e_r) {
            // eapi接口返回值被加密，需要解密
            answer.body = encrypt.eapiResDecrypt(
              body.toString('hex').toUpperCase(),
            )
          } else {
            answer.body =
              typeof body == 'object' ? body : JSON.parse(body.toString())
          }

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
          // can't decrypt and can't parse directly
          answer.body = body
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
