// asincrono usando callbacks

const fs = require('node:fs')

console.log('leyendo el primer archivo...\n\t')
fs.readFile('./archivo.txt', 'utf-8', (error, text)=>{
    console.log(text)
})

console.log('cosas por hacer mientras leo el archivo')

console.log('leyendo el segundo archivo...\n\t')
fs.readFile('./archivo2.txt', 'utf-8', (error, text)=>{
    console.log(text)
})