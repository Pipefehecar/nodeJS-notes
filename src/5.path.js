const path = require('node:path')
// barra separadora segun el SO
console.log(path.sep)

const filePath = 'content/subfolder/test.exc.txt'
// path.join
const filePathJoined = path.join('content', 'subfolder', 'test.txt')
console.log(filePathJoined)
console.log(filePath)

// imprime el nombre del archivo
const base = path.basename(filePath)
console.log(base)

// imprime el nombre del archivo sin la extension
const filename = path.basename(filePath, '.txt')
console.log(filename)

// imprime la ruta absoluta
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

// imprime la extension del archivo
const ext = path.extname(filePath)
console.log(ext)
