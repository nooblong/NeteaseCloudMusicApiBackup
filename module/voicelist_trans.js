module.exports = (query, request) => {
  const data = {
    limit: query.limit || '200', // 每页数量
    offset: query.offset || '0', // 偏移量
    radioId: query.radioId || null, // 电台id
    programId: query.programId || '0', // 节目id
    position: query.position || '1', // 排序编号
  }
  return request(
    'POST',
    `https://interface.music.163.com/api/voice/workbench/radio/program/trans`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
