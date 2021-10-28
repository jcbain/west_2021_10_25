// what is a callback?

const sayHello = function(name) {
  return `hello, ${name}`;
}

const greeting = sayHello('Jennifer');
console.log(greeting);


const yellAtSomeone = function(name, anotherFunction) {
  const statement = anotherFunction(name);
  return `${statement.toUpperCase()}!!!!`
}

const sayGoodbye = function(name){
  return `get out of here, ${name}`
}

const yelledPhrase = yellAtSomeone("Gary", sayGoodbye);
console.log(yelledPhrase)

const saySomething = function(name, phrase) {
  return `${phrase}, ${name}`;
}