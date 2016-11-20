const express = require('express');
const app = express();
const passport = require('./security');

var SECRET_TOKEN = "thisisalongsecrettokenapparently";
const jwt = require('jsonwebtoken');
const SECRET = "somereallylongsupersecretexpression";

//components
app.use(require('body-parser').urlencoded({extended:true}));
app.use(require('body-parser').json());
app.use(require('express-session')({secret:SECRET_TOKEN,resave:true,saveUninitialized:false}));
app.use(passport.initialize());
app.use(passport.session());

//statics
app.use('/node_modules',express.static(__dirname + '/node_modules'));
app.use('/js',express.static(__dirname + '/app/js'));
app.use('/css',express.static(__dirname + '/app/css'));
app.use('/img',express.static(__dirname + '/app/img'));
app.use('/data',express.static(__dirname + '/app/data'));
app.use('/fonts',express.static(__dirname + '/app/fonts'));
app.use('/partials',express.static(__dirname + '/app/partials'));

//api
app.use('/api',passport.validate(),require('./api'));

//home page
app.get('/',function(req,res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.get('/app',passport.validate(),function(req,res) {
  res.sendFile(__dirname + '/app/app.html');
});

// app.post('/',passport.authenticate('jwt'),function(req,res) {
app.post('/',function(req,res) {
  if (req.query.username == 'admin' && req.query.password == 'welcome') {
    //create the token
    var token = jwt.sign({username:'admin'},SECRET,{
      expiresIn:900
    });
    //send
    console.log('authenticate succeeded');
    return res.json({success:true,token:'JWT ' + token});
  }//end if
  console.log('authenticate failed');
  return res.send({success:false});
});

app.get('/logout',function(req,res) {
  req.session.destroy(function(err) {
    res.redirect('/');//logout
  });
});

//start the server
app.listen(process.env.PORT || 3000,function(req,res) {
  console.log('...started');
});
