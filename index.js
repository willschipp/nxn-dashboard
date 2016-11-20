const express = require('express');
const app = express();
const passport = require('./security');

//TODO externalize properties
var SECRET_TOKEN = "thisisalongsecrettokenapparently";
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const SECRET = "somereallylongsupersecretexpression";


//components
app.use(require('body-parser').urlencoded({extended:true}));
app.use(require('body-parser').json());
// app.use(require('express-session')({secret:SECRET_TOKEN,resave:true,saveUninitialized:false}));
app.use(passport.initialize());

//security function
var auth = expressJWT({secret:SECRET,userProperty:'payload',getToken:function fromHeaderOrQuery(req){
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
  } else if (req.query && req.query.token) {
    return req.query.token;
  }//end if
  return null;
}});

//statics
app.use('/node_modules',express.static(__dirname + '/node_modules'));
app.use('/js',express.static(__dirname + '/app/js'));
app.use('/css',express.static(__dirname + '/app/css'));
app.use('/img',express.static(__dirname + '/app/img'));
app.use('/data',express.static(__dirname + '/app/data'));
app.use('/fonts',express.static(__dirname + '/app/fonts'));
app.use('/partials',express.static(__dirname + '/app/partials'));

//api
app.use('/api',auth,require('./api'));

//home page
app.get('/',function(req,res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.get('/app',auth,function(req,res,next) {
  res.sendFile(__dirname + '/app/app.html');
});

// app.post('/',passport.authenticate('jwt'),function(req,res) {
app.post('/',function(req,res,next) {

  if (!req.body.username || !req.body.password) {
    return res.status(400).json({message:'no fields'});
  }//end if

  passport.authenticate('local',function(err,user,info){
    if (err) {
      return next(err);
    }//end if
    if (user) {
      var token = jwt.sign(user,SECRET,{
        expiresIn:900
      });
      return res.json({token:token});
    } else {
      return res.status(401);
    }
  })(req,res,next);
});

app.get('/logout',function(req,res) {
  //TODO - remove session logic, if any
  res.redirect('/');//logout
});

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.redirect('/');
  }
});



//start the server
app.listen(process.env.PORT || 3000,function(req,res) {
  console.log('...started');
});
