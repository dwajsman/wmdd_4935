// hello world of node
const http = require('http')

// create a server that handles a request and a response
// code note, you will often see req and res short for request and response 
http.createServer((req, res) => {
  // provide a status code and Content-Type for the response header
  res.writeHead(200, {'Content-Type': 'text/plain'})
  // a response end is needed to let the client know that the response is finished.
  res.end('yay it works!')
  // specify the port to listen on
}).listen(3000)