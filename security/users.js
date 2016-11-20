var Users = {
  users:[
    {username:"john",password:"doe",roles:['multi'],id:1},
    {username:"jack",password:"black",roles:['single'],id:2}
  ]
};

Users.findById = function(id) {
  for (var i=0;i<Users.users.length;i++) {
    if (Users.users[i].id == id) {
      return Users.users[i];
    }//end if
  }//end for
  return;
}

Users.findByUsername = function(username) {

  for (var i=0;i<Users.users.length;i++) {
    if (Users.users[i].username == username) {
      return Users.users[i];
    }//end if
  }//end for
  return;
}

module.exports = Users;
