module.exports = (query, request) => {
  const data = {
    refer: 'inbox_invite',
    roomId: query.roomId,
    inviterId: query.inviterId,
  }
  return request(
    'POST',
    `http://interface.music.163.com/eapi/listen/together/play/invitation/accept`,
    data,
    {
      crypto: 'eapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP,
      url: '/api/listen/together/play/invitation/accept',
    },
  )
}
