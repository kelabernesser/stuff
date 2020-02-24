const arr = [1, 2, 3]

const addArr = arr.reduce(function(final, num){
    final += num
    return final
})

console.log(addArr)

const stringArr = arr.reduce(function(final, word){
   final += word.toString()
    return final
})

console.log(stringArr)

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const didVote = voters.reduce(function(final, voter){
    if(voter.voted === true){
        final++
    }

    return final
}, 0)

console.log(didVote)

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const moneyBags = wishlist.reduce(function(final, present){
    final += present.price
    return final
}, 0)

console.log(moneyBags)

var arrays = [
    ["1", "2", "3"],
    [ true ],
    [4, 5, 6]
]



const oneLove = arrays.reduce(function(final, array){
    
    final = final.concat(array)
    return final
}, [])

console.log(oneLove)

var voters2 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

const voterAge = voters2.reduce(function(final, voter){
    if(voter.age >= 18 && voter.age <= 25 ){
        final.youth++
        if(voter.voted){
            final.youngVotes++
        }
        
    }

    else if(voter.age >= 26 && voter.age <= 35){
        final.mids++
        if(voter.voted){
            final.midVotes++
        }

    }

    else if(voter.age >= 36 && voter.age <= 55){
        final.olds++
        if(voter.voted){
            final.oldVotes++
        }


    }
    return final
},{youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0})

console.log(voterAge)