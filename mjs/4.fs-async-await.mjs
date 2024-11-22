//esto no corre si el archivo es .js dado que con commonjs no se puedo hacer de esta manera

import { readFile } from 'node:fs/promises'

console.log('leyendo el primer archivo...\n\t')
const text1 = await readFile('./archivo.txt', 'utf-8')
console.log(text1)

console.log('cosas por hacer mientras leo el archivo')

console.log('leyendo el segundo archivo...\n\t')
const text2 = await readFile('./archivo2.txt', 'utf-8')
console.log(text2)
