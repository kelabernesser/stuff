var icecreamEater = {
    name: "kela",
    age: 22,
    favoritePlaces : [
        {
            placeName: "baskinRobins",
            bestFlavor: "cookieDough",
            recommendedScoops: 3,
            bestCombo : [
                {
                    flavor: "chocolate",
                    topping: "white choclate chips"
                }

            ]
        },

        {
            placeName: "coldStone",
            bestFlavor: "rainbow sherbert",
            recommendedScoops: 19,
            bestCombo : [
                {
                    flavor: "vanilla",
                    topping: "rainbow sprinkles"
                }
            ]

        }
    ],

    topFavorite : function() {
        return this.name + "'s "+ this.favoritePlaces[0] + " has the best combo: "+ this.favoritePlace[0].bestCombo
    }

}  
