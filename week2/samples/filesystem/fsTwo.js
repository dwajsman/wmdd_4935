const fs = require('fs')

let data = fs.readFile('./samptext.txt', (err, data) => {
  if (err) console.log(err)
  console.log(data)
})

let template = `
<html>
  <body>
    <div>${data}</div>
  </body>
</html>
`

fs.writeFile('page2.html', template.trim(), 'utf8', (err) => {
  if (err) console.log(err)
})