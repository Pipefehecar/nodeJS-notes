const express = require('express')

const app = express()
const port = 3000
app.disable('x-powered-by')
app.use(express.json())

// app.use((req, res, next) => {
//   if (req.method != 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()
//   let data = ''
//   req.on('data', (chunk) => {
//     data += chunk.toString()
//   })
//   req.on('end', () => {
//     data = JSON.parse(data)
//     data.timestamp = new Date()
//     req.body = data
//   })
//   next()
// })

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello World!</h1>')
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(response)
})

app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
