const { readdir } = require('node:fs')

const folder = process.argv[2] ?? './'
console.log(`folder:${folder}`)
readdir(folder, (error, files) => {
  if (error) {
    console.error('hubo un error', error)
    return
  }
  console.log('los archivos en la carpeta son:')
  files.forEach((element) => {
    console.log(element)
  })
})
