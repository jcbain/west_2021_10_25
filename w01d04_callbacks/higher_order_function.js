

const myMap = (arr, callback) => {
  const newArray = [];

  for(const val of arr){
    newArray.push(callback(val))
  }

  return newArray;
}

const nums = [1, 2, 40, 65423];
const doubledArray = myMap(nums ,x => x * 2);
console.log(nums);
console.log(doubledArray)

const names = ['james', 'jen', 'scully']

name => `get out of here, ${name}`
const sayRudePhrase = function(name){
  return `get out of here, ${name}`
} 

const rudePhrases = myMap(names, sayRudePhrase)
console.log(rudePhrases)