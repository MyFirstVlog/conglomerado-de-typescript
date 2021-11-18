//? Funciones básicas
function sumar( a : number, b : number ) : number{
    return a + b;
  }

  const contar = ( heroes : string[]) : number => {
    return heroes.length;
  }
  const superHeroes =  ["Flash", "Arrow", "Superman", "Linterna Verde"];
  contar(superHeroes);

  // Parametros por defecto
  const llamarBatman = ( llamar? : boolean ) : void => {
    if( llamar ){
      console.log("Batiseñal activada");
    }
  }

  llamarBatman();

  //Rest?
  const unirheroes = ( ...personas:string[] ) : string=> {
    return personas.join(", ");
  }

  //Tipo funcion
  const noHaceNada = ( numero : number, texto : string, booleano: boolean, arreglo : any[] ) : void => {}

  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  const noHaceNadaTampoco : (x:number, y:string, z: boolean , w: any[]) => void = noHaceNada;