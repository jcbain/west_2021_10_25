
const higherOrderFunction = (callback)  => {
  const data = {
    userName: 'Mulder'
  };

  // console.log('(1) before the setTimeout')
  setTimeout(() => {
    data.userName = "Scully";
    callback(data);

  })

  // console.log('(2) after the setTimeout');
}

higherOrderFunction((ourData) => {
  ourData.firstName = "Dana"
  console.log(ourData)
} )


// console.log('(3) before the main function call')

// higherOrderFunction(() => {
//   console.log('(4) inside our callback')
// })

// console.log('(5) after the main function call')