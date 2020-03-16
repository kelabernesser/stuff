function collectAnimals(...animals) {
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

function combineFruit( fruit, ...sweets, ...vegetables ) {
    return 'fruit: ${fruit} sweets: ${sweets} vegetables: ${vegetables}'
}
console.log(combineFruit(["apple", "pear"],
    ["cake", "pie"],
    ["carrit"]))

const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
};

function parseSentence({location, duration}) {
    return `We're going to have a good time in ${location} for ${duration}`
}
console.log(parseSentence(vacation))

function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}
console.log(returnFirst([0,1,2]))

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav
}

console.log(returnFavorites(favoriteActivities))


const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];


const combineAnimals = (...arr)  =>{  
    return arr.reduce(function(final, arr){
        final = final.concat(arr)
        return final
    },[])
 
}

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]

const product = (...numbers)  => {  
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }

  console.log(product(1, 3, 5, 6, 7))

  function unshift(array, ...numbers) {  
    return [array,...numbers ]
  }
  console.log(unshift([1, 2, 3], 1, 2, 2))



  function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        const [firstName, secondName] = name
        
        return `firstName: ${firstName}, lastName: ${secondName}`
})
  }

  console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
  //[
  //  {firstName: "Frank", lastName: "Peterson"},
  //  {firstName: "Suzy", lastName: "Degual"},
  //  {firstName: "Liza", lastName: "Jones"},
  //]