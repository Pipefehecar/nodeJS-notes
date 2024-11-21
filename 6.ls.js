const {readdir} = require('node:fs')


readdir('./', (error, files)=>{
    if(error){
        console.error('hubo un error', error)
        return;
    }
    console.log('los archivos en la carpeta son:')
    files.forEach(element => {
        console.log(element)
    });

})