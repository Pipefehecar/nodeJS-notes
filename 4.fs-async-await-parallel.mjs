//esto no corre si el archivo es .js dado que con commonjs no se puedo hacer de esta manera

import { readFile } from 'node:fs/promises'

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text1, text2])=>{ // destructuring
    console.log(text1)
    console.log(text2)
})