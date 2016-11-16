const express = require('express');
const app = express();
const passport = require('./security');

//components
app.use(require('body-parser').urlencoded({extended:true}));
app.use(require('body-parser').json());
app.use(passport.initialize());
// app.use(passport.session());

//statics
app.use('/node_modules',express.static(__dirname + '/node_modules'));
app.use('/js',express.static(__dirname + '/app/js'));
app.use('/css',express.static(__dirname + '/app/css'));
app.use('/img',express.static(__dirname + '/app/img'));
app.use('/data',express.static(__dirname + '/app/data'));
app.use('/fonts',express.static(__dirname + '/app/fonts'));
app.use('/partials',express.static(__dirname + '/app/partials'));

//api
app.use('/api',require('./api'));

//home page
app.get('/',function(req,res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.get('/app',passport.validate(),function(req,res) {
  res.sendFile(__dirname + '/app/app.html');
});

app.post('/',passport.authenticate('local'),function(req,res) {
  console.log(req.user);
  res.json({"hello":"world"});
});

//start the server
app.listen(process.env.PORT || 3000,function(req,res) {
  console.log('...started');
});
