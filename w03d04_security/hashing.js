const bcrypt = require('bcryptjs');

const plainTextPassword = "password";
const users = {
  'abc': {
    email: 'some@email.com',
    password: 'purplemonkeydishwasher'
  }
}

// asynchronous hashing
bcrypt.genSalt(10, (err, salt) => {
  console.log('my salt: ', salt)
  bcrypt.hash(plainTextPassword, salt, (error, hash) => {
    console.log('my hash: ', hash)
    const user = {
      email: 'j@j.com',
      password: hash
    }
    users['efgh'] = user

    console.log(users)

  })
})


// sync hashing
const salt = bcrypt.genSaltSync(10)
console.log('my sync salt', salt)
const hash = bcrypt.hashSync(plainTextPassword, salt);
console.log('my sync hash',  hash);

// synchronous comparing of hashed
// const success = bcrypt.compareSync("password", hash);
// console.log('success: ', success)

bcrypt.compare(plainTextPassword, hash, (err, success) => {
  console.log('async success: ', success)
})



// these are equivalent
// bcrypt.hash(plainTextPassword, '$2a$10$htbcsu05wQzDFUjKUf0XjO', (error, hash) => {
//   console.log('my hash: ', hash)
// })

// console.log('$2a$10$htbcsu05wQzDFUjKUf0XjOgShRSaQ9LUP3l9NhIeTANHaPCqasXlu' === '$2a$10$htbcsu05wQzDFUjKUf0XjOgShRSaQ9LUP3l9NhIeTANHaPCqasXlu')