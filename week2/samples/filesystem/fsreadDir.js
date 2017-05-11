// read every file in a directory
const fs = require('fs')

// the directory where our files live
let dir = './docs'

// fs.readdir returns an array of files in the directory
fs.readdir(dir, (err, files) => {
  if (err) console.log(err)
  // use forEach() to loop over the files
  files.forEach((file) => {
    // read the files, we need to provide the directory again as the array only contains file names
    fs.readFile(`${dir}/${file}`, 'utf8', (err, data) => {
      console.log(data)
    })
  })
})