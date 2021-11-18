(()=> {

    abstract class Mutante {
        constructor(
            public name: string,
            public realName : string
        ){
            
        }
    }

    class Xmen extends Mutante{
            salvarMundo():void{
                console.log('Mundo Salvado')
            }
    }

    class Villain extends Mutante{
        dominarMundo():void{
            console.log('Mundo Conquistado')
        }
    }

    //* tambien es posible 
    let magneto: (Villain);

    //* sriven para crear otras clases o usarlo en otras clases
    const wolverine = new Xmen('Wolverine', 'Logan');
    magneto = new Villain('Magneto', 'Magnus');

    // wolverine.salvarMundo()
    // magneto.dominarMundo()

    const printName = (character: Mutante) => {
        console.log(character.realName)
    }

    //! printName(wolverine) Aunque espera un tipo mutante las clases internas de wolverine ya lo extienden por eso puedo usar


})()