"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            console.log('Mundo Salvado');
        }
    }
    class Villain extends Mutante {
        dominarMundo() {
            console.log('Mundo Conquistado');
        }
    }
    let magneto;
    const wolverine = new Xmen('Wolverine', 'Logan');
    magneto = new Villain('Magneto', 'Magnus');
    const printName = (character) => {
        console.log(character.realName);
    };
})();
(() => {
    class Avenger {
        constructor(name, team, realName, age) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.age = age;
        }
        static getAvgAge(age) {
            return Math.sqrt(age).toFixed(2);
        }
        bio() {
            return `${this.name} /-/ ${this.team}`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Hulk', 'Capitan');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor avenger llmado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor Xmen llamado');
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error("es menor a 3 caracteres");
            }
            this.name = name;
        }
    }
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy el apocalipsis unicoo');
            }
            return Apocalipsis.instance;
        }
        changeName(name) {
            this.name = name;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis2.changeName('AURON');
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map