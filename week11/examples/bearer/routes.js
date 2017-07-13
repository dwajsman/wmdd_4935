module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    return reply({ success: true })
  },
  config: {
    auth: {
      strategy: 'bearer',
      scope: 'user' // or [ 'user', 'admin' ]
    }
  }
}]