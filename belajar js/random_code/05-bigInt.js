// JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.

let x = 9;
let y = 9999999999999999n;
let z = BigInt(9999999999999999);

console.log(`Number ${x} with ${typeof x}`);
console.log(`Big Int ${y} with ${typeof y} use n`);
console.log(`Number ${z} with ${typeof z} use BigInt()`);
