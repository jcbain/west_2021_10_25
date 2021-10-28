const names = ["James", "Scully", "Mulder", "Jennifer"];


// const sayHello = function(name) {
//   console.log(`hello, ${name}`);
// }

// for(const name of names){
//   console.log(sayHello(name))
// }

// names.forEach(sayHello)

names.forEach(function(name) {
  console.log(`hello, ${name}`);
})

names.forEach(function(name, i, arr) {
  console.log(`the index value of ${name} is ${i}`)
  // console.log(`get out of here, ${name.toUpperCase()}`);
})

