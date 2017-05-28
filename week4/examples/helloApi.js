const http = require('http')

const jake = {
  name: 'Jake',
  species: 'magic shape-shifting dog',
  hobbies: ['makin\' bacon pancakes', 'playing the violin']
}

const finn = {
  name: 'finn',
  species: 'human',
  hobbies: ['adventuring', 'kissing princesses']
}

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  if (req.url === '/jake') {
    res.end(JSON.stringify(jake))
  } else if (req.url === '/finn') {
        res.end(JSON.stringify(finn))
} else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/plain')
    res.write('nothing to see here\n\n')
    res.end('try "/finn" or "/jake"')
  }
}).listen(3000)