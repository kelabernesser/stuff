const airlineForm = document.airlineForm

const body = document.getElementsByTagName("body")[0]
body.style.textAlign = "center"
body.style.backgroundColor = "salmon"
body.style.border = "10px solid orange"

const container = document.getElementById("container")
container.style.margin = "10px"
container.style.padding = "10px"
container.style.backgroundColor = "orange"


const name = document.getElementById("fullName")
name.style.margin = "10px"
name.style.padding = "10px"
name.style.textAlign = "center"

const age = document.getElementById("age")
age.style.margin = "10px"
age.style.padding = "10px"
age.style.textAlign = "center"

const gender = document.getElementById("gender")
gender.style.margin = "10px"
gender.style.padding = "10px"
gender.style.textAlign = "center"

const diet = document.getElementById("diet")
diet.style.margin = "10px"
diet.style.padding = "10px"
diet.style.textAlign = "center"

const destination = document.getElementById("destination")
destination.style.margin = "10px"
destination.style.padding = "10px"
destination.style.textAlign = "center"




airlineForm.addEventListener("submit", function(e){
    e.preventDefault()

    const firstName = airlineForm.firstName.value
    const lastName = airlineForm.lastName.value
    const age = airlineForm.age.value
    const gender = airlineForm.gender.value
    const destination = airlineForm.destination.value

    airlineForm.firstName.value = ""
    airlineForm.lastName.value = ""
    airlineForm.age.value = ""
    airlineForm.gender.value = ""
    airlineForm.destination.value = ""

    const checkedDiet = []
    for(let i = 0; i < airlineForm.diet.length; i++){
        if(airlineForm.diet[i].checked){
            checkedDiet.push(airlineForm.diet[i].value)
            
        }

      
    }

    

   
alert( "First name: " + firstName+
" \nLast name: " + lastName + "\nAge: " + age
+ "\nGender: "+ gender + "\nLocation: "+ destination +
"\nDietary Restrictions: " + checkedDiet
)

})