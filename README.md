# bcrypt-hashpass
Simple password hashing and comparing functions.

## Usage

### ENV
```
process.env.SALT_ROUNDS: number # 1, 2, 3, any number
rocess.env.PASS_SALT: string # generated salt. This can be ignore for automaticaly generated.
```

### hash pass
```js
import { hashPass, comparePassword } from 'bcrypt-hashpass';
const hashed = hashPass('mysecurepass');
```

### compare password
```js
import { hashPass, comparePassword } from 'bcrypt-hashpass';
const correct = comparePassword('mysecurepass', 'HashedPasswordXXX');
```
