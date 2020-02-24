function sum(x, y) {

    try{
        if(typeof (x, y) !== "number"){
            throw "not a number"
        }
    }
    catch(err){
        return(err)
    }

    return x + y
}

//console.log(sum(1, "2"))

var user = {username: "sam", password: "123abc"};
function login(username, password){
  try{
      if(user.username !== user.username || user.password !== user.password){
          throw "username or password is incorrect"
      }

  }
  catch(err){
      return(err)
  }

  return "username:"+user.username + " " + "password:" + user.password
}

console.log(login(user))

