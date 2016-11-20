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

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
  if (id == user.id) {
    done(null,user);
  }
  //   User.findById(id, function(err, user) {
  //       done(err, user);
  //   });
});

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
    res.redirect('/');//login screen
  }
}

module.exports = passport;
