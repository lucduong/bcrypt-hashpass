process.env.SALT_ROUNDS = 9;
const { hashPass, comparePassword } = require('../src/index');


console.time('Hashing');
const hashed = hashPass('mysecurepass');
console.log('[TEST] > hashed: ', hashed);
console.timeEnd('Hashing');

console.time('Compare1');
const correct = comparePassword('mysecurepass', hashed);
console.log('[TEST] > should be true: ', correct);
console.timeEnd('Compare1');

console.time('Compare2');
const check2 = comparePassword('anyPass', hashed);
console.log('[TEST] > should be false: ', check2);
console.timeEnd('Compare2');
