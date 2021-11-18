(()=> {

    class Apocalipsis {

        static  instance : Apocalipsis;

        private constructor(public name:string){

        }

        static callApocalipsis() : Apocalipsis {
            if(!Apocalipsis.instance){
                Apocalipsis.instance = new Apocalipsis('Soy el apocalipsis unicoo')
            }
            return Apocalipsis.instance;
        }

        public changeName(name:string) : void{
            this.name = name
        }
    }    

    // const apocalipsis1 = new Apocalipsis('Hola soy tu peor pesadilla, the one !!')
    // const apocalipsis2  = new Apocalipsis('Hola soy tu peor pesadilla, the one !!')
    // const apocalipsis3 = new Apocalipsis('Hola soy tu peor pesadilla, the one !!')

    //!todas son la misma instancia

    const apocalipsis1 = Apocalipsis.callApocalipsis()
    const apocalipsis2 = Apocalipsis.callApocalipsis()
    const apocalipsis3 = Apocalipsis.callApocalipsis()

    apocalipsis2.changeName('AURON') //A todas les cambnia el nombre
    console.log(apocalipsis1, apocalipsis2, apocalipsis3)

})()