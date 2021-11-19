"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor() {
        this.nombre = 'Alejo';
        this.edad = 23;
        this.sexo = 'masculino';
        this.estadoCivil = 'soltero';
    }
    imprimirBio() {
        return;
    }
}
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    };
    let superman = {
        name: 'Clark Kent',
        age: 43,
        powers: [2, 3],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return `${this.name} es ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: 'Alejandro',
        age: 25,
        address: {
            id: 127,
            zip_code: '050003',
            city: 'Belen'
        },
        getFullAddress() {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.zip_code;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 23,
        getFullAddress() {
            var _a;
            return (_a = this.address) === null || _a === void 0 ? void 0 : _a.zip_code;
        }
    };
})();
(() => {
    let addNumberFunction;
    addNumberFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map