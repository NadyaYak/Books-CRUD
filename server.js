require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const Book = require("./models/book.js");
const Weather = require('./models/weather.js');
const User = require('./models/user.js');
const app = express();
const methodOverride = require('method-override');





app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended:false }));
app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
});
//5oSYP8l8nslLj0gw
mongoose.connect('mongodb+srv://nadezhdayagubova:5oSYP8l8nslLj0gw@cluster0.xjszrfu.mongodb.net/?retryWrites=true&w=majority');
mongoose.set("strictQuery", true);
//mongoose.connect(process.env.MONGO_URI, {
  //useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});






/*

const apiKey ="cc0938f5c5704d3c39799aff9a469acc";
const city = 'Brooklyn';

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
*/

app.get("/books", (req, res) => {
 
  Book.find({}, (error, allBooks) => {
    res.render('Index', {   
     books: allBooks,
    });
  });
});



app.get("/books/new", (req, res) => {
  res.render("New");
});

// New
//... and then farther down the file
app.post('/books', (req, res)=>{
    if(req.body.available === 'on'){ //if checked, req.body.readyToRead is set to 'on'
        req.body.available = true;
    } else { //if not checked, req.body.readyToRead is undefined
        req.body.available = false;
    }
  
    Book.create(req.body, (error, createdBook)=>{
      console.log("something wrong",error)
        res.redirect('/books');
    });
});

// ---POST

app.get("/books/:id", (req, res) => {
  Book.findById(req.params.id, (err, foundBook) => {res.render("Show", {
      book:foundBook
    });
  });
});


app.delete('/books/:id', (req, res)=>{
  Book.findByIdAndRemove(req.params.id, (err, data)=>{
      res.redirect('/books');//redirect back to book index
  });
});






app.get('/books/:id/edit', (req, res)=>{
  Book.findById(req.params.id, (err, foundBook)=>{ //find the veg
    if(!err){
      res.render(
        'Edit',
      {
        book: foundBook//pass in the found book so we can prefill the form
      }
    );
  } else {
    res.send({ msg: err.message })
  }
  });
});

app.put('/books/:id', (req, res)=>{
  if(req.body.available === 'on'){
      req.body.available = true;
  } else {
      req.body.available = false;
  }
  Book.findByIdAndUpdate(req.params.id, req.body, (err, updatedBook)=>{
     console.log(updatedBook)
      res.redirect(`/books/${req.params.id}`);
  });
});


app.listen(3000, () => {
    console.log("listening");
  });