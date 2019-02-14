const bcrypt = require('bcrypt');

let { SALT_ROUNDS, PASS_SALT } = process.env;

exports.hashPass = password => {
  const salt = PASS_SALT || bcrypt.genSaltSync(+SALT_ROUNDS || 17);
  return bcrypt.hashSync(password, salt);
};

exports.comparePassword = (password, hashed) =>
  bcrypt.compareSync(password, hashed);
