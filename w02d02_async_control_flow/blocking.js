// is javascript synchronous or asynchronous
// answer: synchronous


const stop = 10000;
console.log('(1) I run first');


for(let i = 0; i < stop; i++) {
  const date = new Date();
  console.log(date)
}

console.log('(2) I run last');