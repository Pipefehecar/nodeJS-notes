// asincrono usando callbacks

const fs = require('node:fs')

console.log('leyendo el primer archivo...\n\t')
const text1 = fs.readFileSync('./archivo.txt', 'utf-8')
console.log(text1)

console.log('cosas por hacer mientras leo el archivo')

console.log('leyendo el segundo archivo...\n\t')
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(text2)
