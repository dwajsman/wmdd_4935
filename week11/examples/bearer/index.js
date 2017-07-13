const Hapi = require('hapi')

const server = new Hapi.Server()

const validateFunction = (token, callback) => {

  if (token === 'secret') {
    callback(null, true, userCredentials)
  }
  else {
    callback(null, false, userCredentials)
  }
}

server.connection({
  host: 'localhost',
  port: 3000
})

server.register(require('hapi-auth-bearer-simple'), (err) => {

  if (err) {
    throw err
  }

  server.auth.strategy('bearer', 'bearerAuth', {
    validateFunction: validateFunction
  })

  server.route(require('./routes'))

  server.start((err) => {
    if (err) {
      throw err
    }
    console.log('server listening at: ', server.info.uri)
  })
})