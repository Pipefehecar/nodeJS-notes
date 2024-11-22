const os = require('node:os')
console.log('Información del sistema operativo')
console.log('--------------------------------')
console.log('Plataforma: ', os.platform())
console.log('Arquitectura: ', os.arch())
console.log('CPUs: ', os.cpus())
console.log('CPUs cores: ', os.cpus().length)
console.log('Memoria libre: ', os.freemem() / 1024 / 1024 / 1024, 'GB')
console.log('Directorio home: ', os.homedir())
console.log('Tiempo de ejecución: ', os.uptime() / 60 / 60, 'horas')
