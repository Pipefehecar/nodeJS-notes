const http = require('http') //protocolo http
const { findAvailablePort } = require('./10.free-port') //importamos la funcion findAvailablePort
const proccess = require('node:process') //proceso actual

// console.log(proccess.env) //puerto actual

const desirePort = proccess.env.PORT ?? 3000 //puerto deseado
const server = http.createServer((req, res) => {
  res.end('Hola mundo')
  console.log(`${req.method} ${req.url}`)
})


findAvailablePort(desirePort).then((port) => {
  server.listen(port, () => {
    console.log(`Server on port http://localhost:${port}`)
  })
})

