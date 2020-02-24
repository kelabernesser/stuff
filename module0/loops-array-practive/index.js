//#1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var computerCount = 0;

for(var i = 0; i < officeItems.length; i++){

    if( officeItems[i] === 'computer')
    {
        computerCount = computerCount + 1;
        
    }
    
}
console.log(computerCount)

//#2
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++)
  {
      if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+" is old enough")
          if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "female"){
            console.log("She's good to see Mad Max Fury Road")
        } else{
            console.log("He's good to see Mad Max Fury Road")
  
        }
      } else{
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough")
          if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "female"){
            console.log("She cannot see Mad Max Fury Road")
        } else{
            console.log("He cannot see Mad Max Fury Road")
  
        }
      }

      
  }


 
//#bonus
var light = [9, 3, 4, 2]      // "The light is off"

var lightOn = 0;
var lightOff = 0;
var j = 0;
for(var i = 0; i < light.length; i++)
  {
      j = light[i] 
  }
      
  if(j % 2 === 0){
          lightOff = lightOff + 1;
    } else{
        lightOn = lightOn + 1;
    }

  
  if(lightOn < lightOff){
      console.log("light off")
  } else{
      console.log("light on")
  }

