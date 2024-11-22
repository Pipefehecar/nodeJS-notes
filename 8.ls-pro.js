const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')
const folder = process.argv[2] ?? '.'

async function ls(folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch (error) {
    console.error(pc.red(`💥No se encontro el directorio ${folder}`))
    // process.exit(1) es usado para terminar el proceso de node con un error
    process.exit(1)
  }

  const filePromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath)
    } catch (error) {
      console.error(pc.red(`💥No se pudo leer el archivo ${filePath}`))
      process.exit(1)
    }
    const isDirectory = stats.isDirectory() ? 'dir' : 'file'
    const size = stats.size
    const modified = stats.mtime.toLocaleString()
    // auto completamos espacios para que se vea bonito
    return `${file.padEnd(40)} - ${isDirectory.padEnd(10)} - ${size} bytes - ${modified.padStart(10)}`
  })
  // imprimimos cabeceras
  console.log(
    pc.yellow('nombre'.padEnd(40)),
    pc.green('tipo'.padEnd(10)),
    'tamaño'.padEnd(20),
    'modificado'.padEnd(10),
  )
  console.log(
    '______'.padEnd(40),
    '____'.padEnd(10),
    '______'.padEnd(20),
    '__________\n',
  )
  const filesInfo = await Promise.all(filePromises)
  filesInfo.forEach((fileInfo) => console.log(fileInfo))
}

ls(folder)
