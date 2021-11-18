(()=> {

    class Avenger {
        name;
        power;

        constructor(name, power){
            this.name = name;
            this.power = power;        }

    }

    class FlyingAvenger extends Avenger {
        flying;

        constructor(){
            super('Jose','Martillo')
            this.flying = true
        }
    }


    const hulk = new Avenger('Alejandro', 'Fuerza')
    const falcon = new FlyingAvenger()

    // console.log(hulk, falcon)

})()