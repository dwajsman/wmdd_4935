const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('./static/index.html', 'utf8', (err, data) => {
      if (err) console.error(err)
      res.end(data)
    })    
  }
}).listen(3000)