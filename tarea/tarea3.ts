
// Objetos
const batimovil : {carroceria:string,modelo:string, antibalas:boolean, pasajeros:number } = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee : {carroceria:string,modelo:string, antibalas:boolean, pasajeros:number , disparar?: () => void } = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type info  = {
  nombre:string;
  edad? : number;
  mutante : boolean;
}

//Arreglo de villanos

const villanos : info[]= [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type Heroe  = {
  poder:string;
  estatura: number;
}

type Villano  = {
  lider:boolean;
  miembros: string[];
}

const charles: Heroe= {
  poder:"psiquico",
  estatura: 1.78
};

const apocalipsis: Villano = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique : (Heroe | Villano);

mystique = charles;
mystique = apocalipsis;

console.log(villanos)
