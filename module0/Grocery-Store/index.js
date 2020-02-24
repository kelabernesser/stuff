var groceryCart = ["apples","oranges", "milk", "eggs", "chicken", "tofu"]


var shopper = {
    name : "kela",
    
    numberOfItems : 12,

    isVegetarian : false,

    today: function () {
        return this.name + " is getting" + this.numberOfItems + " groceries today.";
    }

    
}

console.log(shopper.today)
