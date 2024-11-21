// ES6 import

// .js -> por defecto usa CommonJS
// .mjs -> por defecto usa ES Modules
// .cjs -> para usar CommonJS
import { sum, mult, div, sub } from "./sum.mjs";

console.log(`sum(1, 2) = ${sum(1, 2)}`);
console.log(`mult(1, 2) = ${mult(1, 2)}`);
console.log(`div(1, 2) = ${div(1, 2)}`);
console.log(`sub(1, 2) = ${sub(1, 2)}`);


