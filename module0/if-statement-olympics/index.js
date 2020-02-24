if (5 > 3) {
    console.log("is greater than")
}

var animal = 'cat';

if (animal.length === 3) {
    console.log("is the length")
}

if( 'cat' === 'dog'){
    console.log("they are the same")
} else{
    console.log("they are not the same")
}

var person = {
    name: "Bobby",
    age: 12
  }

  if(person.age >= 18){
      console.log("is allowed to go to the movie")
  } else{
      console.log("is not allowed to go to the movie")
  }

  if(person.name[0] == 'B'){
      console.log("is allowed to go to the movie")
  } else{
      console.log("is not allowed to go to the movie")
  }

  if(person.age >= 18 && person.name[0] == 'B'){
    console.log("is allowed to go to the movie")
  }else{
    console.log("is not allowed to go to the movie")
}

if( 1 === 1){
    console.log("strict")
} else if(1 == 1){
    console.log("abstract")
} else{
    console.log("not equal at all")
}

if( (1 <= 2) && (2 === 4)){
    console.log("yes")
}

var dog = "dog"
if(dog == 'dog' ){
    console.log("yes")
}


if("true" instanceof Boolean){
    console.log("yes")
}

var animal = 9


if (typeof animal === 'string'){
    console.log("I am a string")
} else {
    console.log('I am not a string')
}

console.log(typeof 'Hello')

if ("s" > 12){
    console.log("s is greater than 12")
}
else{
    console.log("s is not greater than 12")
}

var myNum = 9

if(myNum % 2 === 0){
    console.log("number is even")
}
else{
    console.log("number is odd")
}