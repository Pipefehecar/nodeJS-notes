const fs = require('node:fs/promises')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

async function ls(folder){
    let files
    try{
        files = await fs.readdir(folder)
    } catch (error){
        console.error(`No se encontro el directorio ${folder}`)
        // process.exit(1) es usado para terminar el proceso de node con un error
        process.exit(1);
    }

    const filePromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats
        try{

            stats = await fs.stat(filePath)
        } catch (error){
            console.error(`No se pudo leer el archivo ${filePath}`)
            process.exit(1)
        }
        const isDirectory = stats.isDirectory() ? 'dir' : 'file'
        const size = stats.size
        // auto completamos espacios para que se vea bonito
        return `${file.padEnd(40)} - ${isDirectory.padEnd(10)} - ${size} bytes`
    })
    // imprimimos cabeceras
    console.log('nombre'.padEnd(40), 'tipo'.padEnd(10), 'tamaño')
    console.log('______'.padEnd(40), '____'.padEnd(10), '______\n')
    const filesInfo = await Promise.all(filePromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)