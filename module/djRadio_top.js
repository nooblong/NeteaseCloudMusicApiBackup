//电台排行榜获取
module.exports = (query, request) => {
  const data = {
    djRadioId: query.djRadioId || null, // 电台id
    sortIndex: query.sortIndex || 1, // 排序 1:播放数 2:点赞数 3：评论数 4：分享数 5：收藏数
    dataGapDays: query.dataGapDays || 7, // 天数 7:一周 30:一个月 90:三个月
    dataType: query.dataType || 3, // 未知
  }
  return request(
    'POST',
    'https://interface.music.163.com/weapi/expert/worksdata/works/top/get',
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
