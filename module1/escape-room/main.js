const readline = require("readline-sync");
const name = readline.question("What is your name?")

var optionsToGetOut = ["Put hand in hole", "Find the key, or", "Open the door"]
var getOut = readline.keyInSelect(optionsToGetOut,"Pick One: ")

if(getOut === 0){
    console.log("You died "+ name)
}
else if (getOut === 1)
{
    console.log("Congratulations you found the key, now what?")
    var getOut = readline.keyInSelect(optionsToGetOut,"Pick One: ")
    if(getOut === 0)
        {
            console.log("why did you put your hand in the hole? " + name)
        }   
    else if (getOut === 1)
        {
            console.log("Why did you pick key again?")

         }
    else if(getOut=== 2)
        {   
            console.log("Congratulations " + name +  " you're out!")
         }
        

}
else if(getOut === 2)
{
    
    console.log("sorry, its locked "+ name)
    
}
