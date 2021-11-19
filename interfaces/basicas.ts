(() => {
    
    interface Hero  {
        name:string;
        age? : number;
        powers : number[];
        getName? : ()=> string;
    }

    let flash: Hero = {
        name : 'Barry Allen',
        age : 24,
        powers : [1, 2]
    }
    let superman: Hero= {
        name : 'Clark Kent',
        age : 43,
        powers : [2, 3],
        getName(){
            return this.name
        }
    }

    //restring el uso de objetos, innterfaces y types han crecido de forma muy similar 

    //* Diferencial fdtal es que la interface se puede expandir, en cambio,el type no 



})()