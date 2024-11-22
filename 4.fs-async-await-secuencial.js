// asincrono usando promesas

const { readFile } = require('node:fs/promises')

// console.log('leyendo el primer archivo...\n\t')
// readFile('./archivo.txt', 'utf-8').then(text =>{
//     console.log(text)
// })

// console.log('cosas por hacer mientras leo el archivo')

// console.log('leyendo el segundo archivo...\n\t')
// readFile('./archivo2.txt', 'utf-8').then(text =>{
//     console.log(text)
// })

// asincrono usando funciones immediatamente invocadas (IIFE) Imediately Invoked Function Expression
// si antes de esto no hay un punto y coma, se puede generar un error de sintaxis
;(async () => {
  console.log('leyendo el primer archivo...\n\t')
  const text1 = await readFile('./archivo.txt', 'utf-8')
  console.log('cosas por hacer mientras leo el archivo')
  console.log(text1)

  console.log('leyendo el segundo archivo...\n\t')
  const text2 = await readFile('./archivo2.txt', 'utf-8')
  console.log(text2)
})()

// lo anterior es lo mismo que hacer esto

// async function leerArchivos(){
//     console.log('leyendo el primer archivo...\n\t')
//     const text1 = await readFile('./archivo.txt', 'utf-8')
//     console.log(text1)

//     console.log('cosas por hacer mientras leo el archivo')

//     console.log('leyendo el segundo archivo...\n\t')
//     const text2 = await readFile('./archivo2.txt', 'utf-8')
//     console.log(text2)
// }

// leerArchivos();
