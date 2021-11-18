(()=> {

    type Avengers = {
        nick : string
        ironman: string
        vision : string
        activos : boolean
        poder : number
    }

    const avengers = {
        nick : 'Samuel L Jackson',
        ironman: 'Robert Downey Jr',
        vision : 'Paul Betanny',
        activos : true,
        poder : 1500.234
    }

    //* desestrucutracion de arreglos

    const {nick, ironman, poder} = avengers

    const printAvenger = ({vision, ...resto} : Avengers) => {
        console.log(vision)
        console.log(resto.activos)
    }

    // console.log(nick,ironman, poder.toFixed(2))

    // printAvenger(avengers)

    //!Desestructuracion de arreglos
    const avengersArr: [string, boolean, number] = ['marvel captain', true, 123.132]

    const [a,,c] = avengersArr

    // console.log({a,c})


})()