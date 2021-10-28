const myName = "James";
const yourName = myName;

// console.log('myName:', myName);
// console.log('yourName:', yourName);


// functions
const sayPetName = function(petName){

  console.log(`my pet's name is ${petName}`);
}


const printPetName = sayPetName;
// const writePetName = printPetName;


console.log('printPetName', printPetName)
sayPetName('Pippa')
// printPetName("Prairie");
