const fs = require('fs')

fs.readFile('./samptext.txt', (err, data) => {
  if (err) console.log(err)
  let newHtml = `
  <html>
    <body>
      <div>${data}</div>
    </body>
  </html>
  `
  fs.writeFile('page3.html', newHtml.trim(), 'utf8', (err) => {
    if (err) console.log(err)
    console.log('page3.html created')
  })
})
