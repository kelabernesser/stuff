const readline = require('readline-sync')


const greeting = readline.question("Welcome!, press 'enter' to continue")
let name = readline.question("What is your name? ")

const walking = readline.keyIn("Enter 'w' to walk: ", { limit: `$<w>` })

let enemyArr = ["sloth", "dragon", "spider"]


let optionsFight = ["run", "attack", "print"]

let playerHealth = 100
let playerInventory = []
let enemyHealth = 100
let damageSent = Math.floor(Math.random() * 100) + 1
let chanceOfAttacking = Math.floor(Math.random() * 2) + 1


console.log(damageSent)

if (walking === 'w') {




    var randomItem = enemyArr[Math.floor(Math.random() * enemyArr.length)]
    console.log("Your attacker is: " + randomItem)

    let fight = readline.question('Choose action$<( from )limitCountNotZero( actions)>: run, attack, print ',
        { limit: optionsFight })

    if (fight === 'print') {
        console.log("Player: " + name + ", HP: ", +playerHealth + " Player-Inventory: " + playerInventory)

        readline.question('Choose action$<( from )limitCountNotZero( actions)>: run, attack, print ',
            { limit: optionsFight })


    }

    if (chanceOfAttacking === 2 || chanceOfAttacking === 3) {
        console.log("enemy runs away!")
    }




    if (fight === 'run' && chanceOfAttacking === 1) {

        console.log("Running!!!")

        // enemyHealth = enemyHealth / 2

        while (playerHealth > 0 && enemyHealth > 0) {



            //player fights

            enemyHealth = enemyHealth - damageSent
            console.log("EnemyHP: " + enemyHealth)

            //enemy sends damage
            damageSent = Math.floor(Math.random() * 50) + 1

            console.log("Enemy attacks!")
            //enemy fights
            playerHealth = playerHealth - (damageSent / 2)
            console.log("PlayerHP: " + playerHealth)

            if (playerHealth < 1) {
                console.log("You died :( ")
                break;
            }
            if (enemyHealth < 1) {
                console.log("You live another day! ")
                playerHealth = 100
                playerInventory.push("cereal", "oreos", "gummy worms")
                break;
            }

            //player chooses to fight again

            fight = readline.question('Choose action$<( from )limitCountNotZero( actions)>: run, attack, print ',
                { limit: optionsFight })

                if (fight === 'attack' && chanceOfAttacking === 1) {
                    while (playerHealth > 0 && enemyHealth > 0) {
        
                        console.log("Attacking!!!")
        
                        //player fights
                        enemyHealth = enemyHealth - damageSent
                        console.log("EnemyHP: " + enemyHealth)
        
                        //enemy sends damage
                        damageSent = Math.floor(Math.random() * 50) + 1
        
                        console.log("Enemy attacks!")
                        //enemy fights
                        playerHealth = playerHealth - damageSent
                        console.log("PlayerHP: " + playerHealth)
        
                        if (playerHealth < 1) {
                            console.log("You died :( ")
                            break;
                        }
                        if (enemyHealth < 1) {
                            console.log("You live another day! ")
                            playerHealth = 100
                            playerInventory.push("cereal", "oreos", "gummy worms")
                            break;
                        }
        
                        //player chooses to fight again
                        fight = readline.question('Choose action$<( from )limitCountNotZero( actions)>:  run, attack, print ',
                            { limit: optionsFight })
        
                        damageSent = Math.floor(Math.random() * 50) + 1
        
        
        
        
        
        
        
                    }
        
        
                }
        
                if (fight === 'print') {
                    console.log("Player: " + name + ", HP: ", +playerHealth + " Player-Inventory: " + playerInventory)
            
                    readline.question('Choose action$<( from )limitCountNotZero( actions)>: run, attack, print ',
                        { limit: optionsFight })
            
            
                }

            

            damageSent = Math.floor(Math.random() * 50) + 1

        }

        



    }

    if (fight === 'attack' && chanceOfAttacking === 1) {
        while (playerHealth > 0 && enemyHealth > 0) {

            console.log("Attacking!!!")

            //player fights
            enemyHealth = enemyHealth - damageSent
            console.log("EnemyHP: " + enemyHealth)

            //enemy sends damage
            damageSent = Math.floor(Math.random() * 50) + 1

            console.log("Enemy attacks!")
            //enemy fights
            playerHealth = playerHealth - damageSent
            console.log("PlayerHP: " + playerHealth)

            if (playerHealth < 1) {
                console.log("You died :( ")
                break;
            }
            if (enemyHealth < 1) {
                console.log("You live another day! ")
                playerHealth = 100
                playerInventory.push("cereal", "oreos", "gummy worms")
                break;
            }

            //player chooses to fight again
            fight = readline.question('Choose action$<( from )limitCountNotZero( actions)>:  run, attack, print ',
                { limit: optionsFight })

                if (fight === 'run' && chanceOfAttacking === 1) {

                    console.log("Running!!!")
        
                    // enemyHealth = enemyHealth / 2
        
                    while (playerHealth > 0 && enemyHealth > 0) {
        
        
        
                        //player fights
        
                        enemyHealth = enemyHealth - damageSent
                        console.log("EnemyHP: " + enemyHealth)
        
                        //enemy sends damage
                        damageSent = Math.floor(Math.random() * 50) + 1
        
                        console.log("Enemy attacks!")
                        //enemy fights
                        playerHealth = playerHealth - (damageSent / 2)
                        console.log("PlayerHP: " + playerHealth)
        
                        if (playerHealth < 1) {
                            console.log("You died :( ")
                            break;
                        }
                        if (enemyHealth < 1) {
                            console.log("You live another day! ")
                            playerHealth = 100
                            playerInventory.push("cereal", "oreos", "gummy worms")
                            break;
                        }
        
                        //player chooses to fight again
        
                        fight = readline.question('Choose action$<( from )limitCountNotZero( actions)>: run, attack, print ',
                            { limit: optionsFight })
        
                        damageSent = Math.floor(Math.random() * 50) + 1
                    }


        
        
                }

                if (fight === 'print') {
                    console.log("Player: " + name + ", HP: ", +playerHealth + " Player-Inventory: " + playerInventory)
            
                    readline.question('Choose action$<( from )limitCountNotZero( actions)>: run, attack, print ',
                        { limit: optionsFight })
            
            
                }


            damageSent = Math.floor(Math.random() * 50) + 1







        }

        


    }
}