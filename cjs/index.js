// commonJS import require module
const { sum } = require('./sum.js')

console.log('Hello World')
console.info(globalThis)
console.warn('Hello World')
console.error('Hello World')

console.log(sum(1, 2))
