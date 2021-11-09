const express = require("express");
const morgan = require("morgan");
const port = 7654;

const dogs = {
  abcd: {
    color: 'tri-color',
    isFurry: true
  },
  efgh: {
    color: 'blue',
    isFurry: false
  }
}

const generateRandomId = () => {
  return Math.floor(Math.random() * 2000) + 1
}

const app = express();

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));

// BROWSE see all the dogs 
// GET /dogs
app.get('/dogs', (req, res) => {
  const templateVars = {dogs: dogs}
  res.render("dogs", templateVars)
})

// READ see a single dog
// GET /dogs/:id 
app.get('/dogs/:dogId', (req, res) => {
  console.log('req.parmas', req.params);
  const dogId = req.params.dogId;
  const dog = dogs[dogId];
  console.log("our individual dog object", dog)
  
  if(!dog) {
    return res.redirect('/dogs')
  }

  const templateVars = {dog: dog, dogId: dogId}
  res.render("single-dog", templateVars)
})

// EDIT edit a single dog
// POST /dogs/:id
app.post('/dogs/:dogId', (req, res) => {
  console.log('req.body', req.body)
  const dogId = req.params.dogId;
  const newColor = req.body.color;
  dogs[dogId].color = newColor;


  res.redirect('/dogs')
})

// ADD add a new dog
app.post('/dogs', (req, res) => {
  console.log('req.body', req.body)
  const color = req.body.color;
  const isFurry = req.body.isFurry;
  const id = generateRandomId();

  const newDog = {
    color: color,
    isFurry: isFurry
  }

  dogs[id] = newDog;

  res.redirect('/dogs')
})

// DELETE delete a single dog
// POST /dogs/:id/delete /dogs
app.post('/dogs/:dogId/delete', (req, res) => {
  const dogId = req.params.dogId;

  delete dogs[dogId]
  res.redirect('/dogs');
})



app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})