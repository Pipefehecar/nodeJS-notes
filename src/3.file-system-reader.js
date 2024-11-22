const { Console } = require('node:console')
const fs = require('node:fs')

// const text = fs.readFileSync('./archivo.txt', 'utf-8')

// console.log(text)

//read file async

fs.readFile('./archivo.txt', 'utf-8', (error, text) => {
  console.log(`archivo.txt\n\t${text}`)
})

console.log('Hago algo mientras ...')

fs.readFile('./archivo2.txt', 'utf-8', (error, text) => {
  console.log(`archivo2.txt\n\t${text}`)
})
