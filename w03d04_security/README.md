# W03D04 - Security and Real World http Server

- [X] hashing passwords and why
- [X] cookie encryption and why
- [X] http and https
- [X] what is REST


## Hash
- one way algorithm -> can't get back the plaintext from the hast
- 1:1
- salt: 123dkajf;sdlkfjasd;lfj

plaintext password: 123
hash: kaj;sfldueu0ru93w4ejrsao

## Encryption
- two way algorithm 


## REST
- it is pattern or way to organize the structure of our endpoints
- Representation State Transfer

B browse GET /maps
R read   GET /maps/:id
E edit   POST /maps/:id
A add    POST /maps
D delete POST /maps/:id/delete


see all the pins of a particular
GET /maps/:id/pins


## Storing passwords
- we never want to store passwords as plain-text
- passwords should always be hashed
- *hashing*
  - the plain text is passed to the hashing algorithm and the hashing algorithm outputs a different string (this is know as a hash)
  - This is a one way algorithm, a hashed value cannot be unhashed
  - hashing the plaintext password by itself is a 1:1 algorithm. Every plain text has the same hash
    - this is why we have salt, salt is a random string appended to our password which is then hashed making our hashed password seemingly random


## Encrypted cookies
- plain text cookies are very simple to manipulate by users
- remember a cookie is a key value pair that is stored on the user's browser which means that the user has complete control over the cookie
- encrypt cookies
- *encryption*
  - much like hashing, the plain text input is scrambled/transformed by a function
  - however is is 2 way, encrypted strings can be decrypted

### HTTP Secure (HTTPS)
* HTTPS uses Transport Layer Security (TLS) to encrypt communication between client and server
* Encrypted using asymmetric cryptography which uses a public key and private key system
* The public key is available to anyone who wants it and is used to encrypt the communication
* The private key is known only to the receiver and is used to decrypt the communication

### When to use...
* Plain Text Cookies:
  * Almost never use plain cookies
  * Maybe for:
    * Language selection
    * Shopping cart for non-logged in users
    * Analytics
* Encrypted Cookies:
  * Do this by default
  * Only store a way to uniquely identify the user (eg. `user_id` or `username` can be used to look up values in a database or object)

## REST (Representational State Transfer)

* REST means that the path that we are going to should represent the data being transferred
* An API that uses the REST convention is said to be RESTful
* RESTful routes look like:

  | **Method** | **Path** | **Purpose** |
  |:---:|:---|:---|
  | GET | /resources | Retrieve all of a resource (Browse) |
  | GET | /resources/:id | Retrieve a particular resource (Read) |
  | POST | /resources/:id | Update a resource (Edit) |
  | POST | /resources | Create a new resource (Add) |
  | POST | /resources/:id/delete | Delete an existing resource (Delete) |

* RESTful API's have some advantages:
  * If I know that your API is RESTful, then I can easily guess at what endpoints you have defined and I don't need to read your documentation to figure it out
  * Results in clean URLs (ie. `/resource` instead of `/get-my-resource`)
  * The desired action is implied by the HTTP verb
  * This method of specifying URLs is chainable (eg. `/user/123`, `/user/123/resource` or `/user/123/resource/456`)

* Selectors are always plural (eg. `/resources`, `/users`)
* Actions are always singular (eg. `/login`, `/register`)

## Express Alternatives
- [Restify (JS)](http://restify.com/)
- [Koa (JS)](https://koajs.com/)
- [Hapi (JS)](https://hapi.dev/api/?v=19.0.5)
- [Sinatra (Ruby)](http://sinatrarb.com/documentation.html)
- [Django (Python)](https://www.djangoproject.com/)

## More HTTP Methods
- We have more [*verbs*](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) available to us than just `GET` and `POST`
- Popular ones are `PUT`, `PATCH`, and `DELETE`
- `PUT`: used to replace an existing resource
- `PATCH`: update part of an exisiting resource
- `DELETE`: delete an existing resource
- We can access these other methods via AJAX requests (we'll introduce you to AJAX in week 4) or by using the [`method-override`](https://www.npmjs.com/package/method-override) package
- Using these new verbs, our routes table now looks like:

  | **Method** | **Path** | **Purpose** |
  |:---:|:---|:---|
  | GET | /resources | Retrieve all of a resource (Browse) |
  | GET | /resources/:id | Retrieve a particular resource (Read) |
  | PUT | /resources/:id | Replace a resource (Edit) |
  | PATCH | /resources/:id | Update a resource (Edit) |
  | POST | /resources | Create a new resource (Add) |
  | DELETE | /resources/:id | Delete an existing resource (Delete) |

## Modular Routing
- Store routes in multiple files to keep them organized
- In Express, we need to use the Express.Router() method to give us back a **router** object
- All routes will be added to this _router_ object
- Finally, we export the _router_ object from the file to be imported into our Express server file (eg. `server.js`)

  ```js
  // post-router.js
  const express = require('express');
  const router = express.Router();

  router.get('/', (req, res) => {
    // typical route handler in here
    res.send('hello world');
  });

  module.exports = router;

  // server.js
  const postRouter = require('./routes/post-router');
  app.use('/posts', postRouter);
  ```

## JSON API's
- So far, our servers have been returning server-side rendered templates, but our Express server can be configured to return different types of information including strings/objects (`res.send`), files (`res.sendFile`), and JSON (`res.json`)
- JSON API's are concerned only with sending data (as opposed to HTML), so they are typically consumed with AJAX requests

## Useful Links
* [Plain Text Offenders](https://github.com/plaintextoffenders/plaintextoffenders/blob/master/offenders.csv)
* [How Does Encryption Work?](https://medium.com/searchencrypt/what-is-encryption-how-does-it-work-e8f20e340537)
* [What is HTTPS?](https://www.cloudflare.com/learning/ssl/what-is-https/)
* [Asymmetric Cryptography](https://searchsecurity.techtarget.com/definition/asymmetric-cryptography)
* [Client Session vs Server Session](http://www.rodsonluo.com/client-session-vs-server-session)
* [Resource Naming](https://restfulapi.net/resource-naming/)
* [Express Middleware](https://expressjs.com/en/guide/using-middleware.html)
* [Method Override Package](https://www.npmjs.com/package/method-override)
* [Express Response Object](http://expressjs.com/en/api.html#res)
* [List of common Express middleware](https://expressjs.com/en/resources/middleware.html)