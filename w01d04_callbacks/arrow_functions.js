const sayHello = function(name) {
  console.log(`hello, ${name}`);
};

// const sayHello2 = (name) => {
//   console.log(`hello, ${name}`)
// }

// const sayHello2 = name => {
//   console.log(`hello, ${name}`)
// }

const sayHello2 = name => console.log(`hello, ${name}`)

const addTwoNums = (num1, num2) => {
  return  num1 + num2
};

const ten = addTwoNums(4,6);
console.log(ten)


const names = ["James", "Scully", "Mulder", "Jennifer"];

// names.forEach(name => console.log(`goodbye, ${name}`))


// const person = {
//   name: "Mulder",
//   sayName: () => {
//     console.log(`my name is ${this.name}`)
//   }
// }

// person.sayName();




// sayHello("Mulder");
// sayHello2("Scully")