const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');

const user = {
  username:'admin',
  password:'welcome',
  id:1
}

const SECRET = "somereallylongsupersecretexpression";

passport.use(new LocalStrategy(function(username,password,done){
  if (username == user.username && password == user.password) {
    done(null,user);
  } else {
    done(null,false);
  }
}));

function serialize(req, res, next) {
  // db.updateOrCreate(req.user, function(err, user){
  //   if(err) {return next(err);}
  //   // we store the updated information in req.user again
  //   req.user = {
  //     id: user.id
  //   };
  //   next();
  // });
  next();//just call
}

function generateToken(req, res, next) {
  req.token = jwt.sign({
    id: req.user.id,
  }, 'server secret', {
    expiresInMinutes: 120
  });
  next();
}

function respond(req, res) {
  res.status(200).json({
    user: req.user,
    token: req.token
  });
}


passport.validate = function() {
  return function(req,res,next) {
    if (req.isAuthenticated()) {
      return next();
    }//end if
    console.log('not authenticated');
    res.redirect('/');//login screen
  }
}

module.exports = passport;
