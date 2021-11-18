"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let enumPoderes;
    (function (enumPoderes) {
        enumPoderes[enumPoderes["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        enumPoderes[enumPoderes["fuerzaBatman"] = 1] = "fuerzaBatman";
        enumPoderes[enumPoderes["fuerzaFlash"] = 5] = "fuerzaFlash";
        enumPoderes[enumPoderes["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(enumPoderes || (enumPoderes = {}));
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(enumPoderes);
})();
//# sourceMappingURL=app.js.map