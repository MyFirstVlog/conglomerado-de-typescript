(()=> {
    class Avenger {

        constructor(
            public name: string,
            public realName: string
        ){
            console.log('Constructor avenger llmado')
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`
        }

        //! protected me da la poibilidad de usar metodos entre clase, pero no desde fuera

    }


    class Xmen extends Avenger {

        //* de primero los calores que tendra el padre
        constructor
        (
            name: string,
            realName:string,
            public isMutant: boolean
        
            ){
            super(name, realName)
            console.log('Constructor Xmen llamado')
        }

        getFullNameDesdeXmen(){
            console.log(super.getFullName())
        }

        get fullName(){
            return `${this.name} - ${this.realName}`
        }

        set fullName (name:string){

            if(name.length<3){
                throw new Error("es menor a 3 caracteres");
            }
            this.name = name
        }
    }


    const wolverine = new Xmen('Wolverine', 'Logan', true)

    wolverine.fullName = 'Fer' //!inteligenetmente diferencia !

    console.log(wolverine.fullName) // es un getters que no se manda a llmar con ()
    // wolverine.getFullNameDesdeXmen()
})()