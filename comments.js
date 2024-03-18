// Create web server
// 1. Load the express module
// 2. Create an express application
// 3. Create a route for the root URL
// 4. Start the server
// 5. Create a route for the /comments URL
// 6. Create a route for the /comments/new URL
// 7. Create a route for the /comments/:id URL
// 8. Create a route for the /comments/:id/edit URL
// 9. Create a route for the /comments/:id URL
// 10. Create a route for the /comments/:id URL
// 11. Create a route for the /comments/:id URL
// 12. Create a route for the /comments/:id URL
// 13. Create a route for the /comments/:id URL

// 1. Load the express module
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// 2. Create an express application
var app = express();

// 3. Create a route for the root URL
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

// 5. Create a route for the /comments URL
app.get('/comments', function(req, res) {
  res.send('This is the comments page');
});

// 6. Create a route for the /comments/new URL
app.get('/comments/new', function(req, res) {
  res.send('This is the new comments page');
});

// 7. Create a route for the /comments/:id URL
app.get('/comments/:id', function(req, res) {
  res.send('This is the comments page for ' + req.params.id);
});

// 8. Create a route for the /comments/:id/edit URL
app.get('/comments/:id/edit', function(req, res) {
  res.send('This is the edit comments page for ' + req.params.id);
});

// 9. Create a route for the /comments/:id URL
app.put('/comments/:id', function(req, res) {
  res.send('This is the update comments page for ' + req.params.id);
});

// 10. Create a route for the /comments/:id URL
app.delete('/comments/:id', function(req, res) {
  res.send('This is the delete comments page for ' + req.params.id);
});

// 11. Create a route for the /comments/:id URL
app.post('/comments', function(req, res) {
  res.send('This is the create comments page');
});

// 12. Create a route for the /comments/:id URL
app.get('/comments/:id', function(req, res) {
  res.send('This is the show comments page for ' + req.params.id);
});

//
