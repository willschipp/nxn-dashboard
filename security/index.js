const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const Users = require('./users');


const SECRET = "somereallylongsupersecretexpression";

passport.use(new LocalStrategy(function(username,password,done){
  var user = Users.findByUsername(username);
  if (user) {
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
