(() => {


    class Avenger {
        // private  name : string;
        // public  team : string;
        // public realName?: string;
        static avgAge: number =35; // es una bvariable global o inherente a la clase Avengers.avgAge

        static getAvgAge(age:number) {
            return Math.sqrt(age).toFixed(2)

            //* no tenfo acceso a las propiedades internas de la clase, esto no apunta a alguna instancia u objeto
        }

        constructor(private name:string, public team:string, public realName?: string, public age?:number){
                // this.name = name;
                // this.team = team;
                // this.realName = realName

                //* Forma corta de ejecutar propiedades
        }
        //*si pongo solo private es una funcion que se usara de manera interna, pero guialmente sigue siendo publico
        public bio(){
            return `${this.name} /-/ ${this.team}`
        }



    }


    const antman: Avenger = new Avenger('Hulk', 'Capitan')

    // console.log(antman.bio())

    // console.log(Avenger.getAvgAge(12))

})()