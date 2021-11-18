"use strict";
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
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Fer';
    console.log(wolverine.fullName);
})();
//# sourceMappingURL=main.js.map