//requiring readline-sync
const readlineSync = require('readline-sync')

//choose your player
const playerOptions = ["Mario", "Luigi"]


//Starting status
let statusOptions = "Power up"

//Starting coins
let totalCoins = 0

//class constructor
class Player {
    constructor(hasStar) {
        //setting name to whatever is chosen by the user from another function
        this.name = this.setName()
        
        this.totalCoins = totalCoins
        this.status = "Power up"
        this.hasStar = false
        this.gameActive = true

    }

    //using readline-sync to set name to the user's choice
    setName() {
        let namePicked = readlineSync.keyInSelect(playerOptions, "Choose your player: ")
        if (namePicked === 0) {
            return "Mario"
        }
        else if (namePicked === 1) {
            return "Luigi"
        }


    }

    //if player is hit they are knocked down a level
    gotHit() {
        if(this.hasStar === true){
            console.log("your star protected you!")
            return this.hasStar = false
        }
       
        if (this.status === "Power up") {
    
            return this.status = "Big"

        }
        if (this.status === "Big") {
            return this.status = "small"

        }
        if (this.status === "small") {
            this.status = "dead"
            if(this.status = "dead" ){
                return this.gameActive = false
            }
            
            
        }
        





    }

    //if the player is powered up they will go up a level
    gotPowerup() {
        if (this.status === "small") {
            return this.status = "Big"

        }
        if (this.status === "Big") {
            return this.status = "Power up"

        }
        if (this.status === "Power up") {
            return this.hasStar = true
        }
    }

    //adds coins
    addCoin() {
        this.totalCoins = this.totalCoins + 1
        return this.totalCoins
    }


    print() {
        console.log("Name: " + this.name)
        console.log("totalCoins: " + this.totalCoins)
        console.log("Status: " + this.status)
        if (this.hasStar === true) {
            console.log("You have a star!")
        }
    }


}
const player = new Player()

const randomRange = () => {


    let randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0) {
        player.gotHit()
    }
    else if (randomNumber === 1) {
        player.gotPowerup()
    }
    else if (randomNumber === 2) {
        player.addCoin()
    }

    stopGame()
    


    player.print()
    


}

const stopGame = () =>{
    if(player.gameActive === false){
        clearInterval(intervalID)
        console.log("GAME OVER")
    }
    
}



    var intervalID = setInterval(randomRange, 1000)
    
    var endGame = setTimeout(stopGame)  
    
       
    



