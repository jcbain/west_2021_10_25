// higher order function
// a function to time another function

const timeAFunction = (callback) => {

  const start = new Date().getTime();
  callback();
  const end = new Date().getTime();

  console.log(`your function took ${end - start}ms to run`);
}

const sayHello = () => console.log('hello, world')

timeAFunction(sayHello)