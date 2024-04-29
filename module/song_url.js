// 歌曲链接
module.exports = async (query, request) => {
  const ids = String(query.id).split(',')
  const data = {
    trialMode: 2,
    immerseType: 'ste',
    ids: '["1328146041"]',
    os: 'iOS',
    level: 'exhigh',
    deviceId: 'a8c8c4d613b999dc5d13277b43c7e925',
    encodeType: 'aac',
    extPlay: 0,
  }
  const res = await request(
    'POST',
    `https://music.163.com/api/song/enhance/player/url/v1`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
  // 根据id排序
  const result = res.body.data
  result.sort((a, b) => {
    return ids.indexOf(String(a.id)) - ids.indexOf(String(b.id))
  })
  return {
    status: 200,
    body: {
      code: 200,
      data: result,
    },
  }
}
