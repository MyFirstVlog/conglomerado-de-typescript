(()=> {
    type Avengers = {
        name : string, 
        weapon : string
    }

    const ironman: Avengers = {
        name: 'Tony',
        weapon: 'Armour Suit'
    }

    const captain: Avengers = {
        name: 'Captain America',
        weapon: 'Shield'
    }

    const thor: Avengers = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers = [ironman, thor, captain]

    for (const avenger of avengers) { //el const no se puede tipar
        console.log(avenger)
    }
})()