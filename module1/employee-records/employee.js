var employees = []

function Employee(name, jobTitle, salary, status = "full-time") {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.changeStatus = function(){
       this.status = status
    }
    
}



var david = new Employee("david", "server", 30000)
var aaron = new Employee("Aaron", "mechanic", 60000)
var elijah = new Employee("elijah", "teacher", 40000, "part-time")
 
Employee.prototype.printEmployeeForm = function(){
    console.log(`Name: ${this.name} Title: ${this.jobTitle} Salary: ${this.salary} Status: ${this.status}`)
}

/*Employee.prototype.changeStatus = function(){
    this.status = status
}*/

david.printEmployeeForm()
aaron.printEmployeeForm()
elijah.printEmployeeForm()

employees.push(david)
employees.push(aaron)
employees.push(elijah)

console.log(employees)




