const fs = require('fs')

// creat a new directory using mkdir sync
fs.mkdirSync('newDir')

// rename can be used to move a file or direcory too
fs.rename('./movFl.txt', './newDir/movf.txt', (err) => {
  if (err) {
    console.log(err)
  }
})