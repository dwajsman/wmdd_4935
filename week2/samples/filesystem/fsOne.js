const fs = require('fs')

let num = 4
let dataToWrite = `
<html>
  <body>
    <div>${num + 2}</div>
  </body>
</html>
`

fs.writeFile('index.html', dataToWrite.trim(), 'utf8', (err) => {
  if (err) console.log(err)
  console.log('file created')
})