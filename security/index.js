const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const user = {
  username:'admin',
  password:'welcome',
  id:1
}

passport.use(new LocalStrategy(function(username,password,done){
  findUser(username,function(err,user) {
      if (err) {
        return done(err);
      }//end if
      if (!user) {
        return done(null,false);
      }//end if
      if (password != user.password) {
        return done(null,false);
      }//end if
      return done(null,user);
  });
}));

module.exports = passport;
