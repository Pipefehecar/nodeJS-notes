const http = require('http') //protocolo http
const { findAvailablePort } = require('./10.free-port') //importamos la funcion findAvailablePort
const proccess = require('node:process') //proceso actual
const fs = require('fs') //file system
// console.log(proccess.env) //puerto actual

const desirePort = proccess.env.PORT ?? 3000 //puerto deseado

const proccessRequest = (req, res) => {
  // hacemos un diccionario para guardar la ruta y el texto que deberia mostrar
  const routes = {
    '/': { moduleName: 'home' },
    '/contact': { moduleName: 'contact' },
    '/about': { moduleName: 'about' },
  }
  //configuramos la respuesta
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  //mostramos el texto que deberia mostrar
  if (routes[req.url]) {
    res.statusCode = 200
    res.end(`This is the ${routes[req.url].moduleName} page`)
  } else {
    res.statusCode = 404
    fs.readFile('./404.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('500 Not Found')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
    console.log(`${req.method} ${req.url}`)
  }
}

const server = http.createServer(proccessRequest)

server.listen(desirePort, () => {
  console.log(`Server on port http://localhost:${desirePort}`)
})
