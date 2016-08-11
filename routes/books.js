var express = require('express');
var router = express.Router();
var db = require('./../models');

router.get('/', function(req, res){
  db.books.findAll()
    .then(function(result){
      res.render('books',{
        books: result,
        title: "List of books"
      });
    })
    .catch(function(err){
      console.log(err);
    });
});
router.get('/create', function(req, res){
  res.render('new_books', {
    title: 'Create a new book'
  });
});

//create method
router.post('/', function(req, res){
  db.books.create(req.body)
    .then(function(){
      res.redirect('/books');
    })
    .catch(function(err){
      console.log(err);
    });
});

module.exports = router;
