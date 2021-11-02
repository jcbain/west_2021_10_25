const fs = require('fs');

// const data = fs.readFileSync('./index.html', {encoding: 'utf-8'});

// console.log(data);

fs.readFile('./index.html','utf-8', (err, data) => {
  if(err) {
    return console.log(err)
  }
  const splitData = data.split(" ")
  console.log(splitData)
} )

console.log('when will I run')