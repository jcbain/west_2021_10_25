let iteration = 0;

const interval = setInterval(() => {
  iteration++
  console.log(`the current value of our iteration is: ${iteration}`);
  if(iteration === 10) {
    clearInterval(interval)
  }

}, 500)





// console.log(interval)