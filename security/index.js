const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

//TODO --fix
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

passport.validate = function() {
  return function(req,res,next) {
    if (req.isAuthenticated()) {
      return next();
    }//end if
    res.redirect('/');//login screen
  }
}

module.exports = passport;
