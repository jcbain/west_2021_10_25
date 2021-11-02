console.log('(1) before setTimeouts')

setTimeout(() => {
  console.log('(2) hello there');
},1);

setTimeout(() => {
  console.log('(3) am I second?')
},1);


console.log('(4) after setTimeouts')

const stop = 20000;
console.log('(1) I run first');


for(let i = 0; i < stop; i++) {
  const date = new Date();
  console.log(date)
}

