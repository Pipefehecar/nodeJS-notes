const fs = require('node:fs/promises')

console.log('leyendo el primer archivo...\n\t')
fs.readFile('./archivo.txt', 'utf-8').then((text) => {
  console.log(text)
})

console.log('leyendo el segundo archivo...\n\t')
fs.readFile('./archivo2.txt', 'utf-8').then((text) => {
  console.log(text)
})
