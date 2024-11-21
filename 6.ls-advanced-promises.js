const {readdir} = require('node:fs/promises')

const folder = process.argv[2] ?? './'
console.log(`folder:${folder}`)

readdir(folder).then(files =>{
    console.log('los archivos en la carpeta son:')
    files.forEach(element => {
        console.log(element)
    });

}).catch(error =>{
    console.error('hubo un error', error)
    return;
})