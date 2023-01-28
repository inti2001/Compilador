import { Lexico } from "./lexico/clases/lexico.js";
let src = "-{}while , casa*int 39.165+ 120 22 void=float 39.165+ 12 && ||";
let lexico = new Lexico(src);

if(src.length <= 0) { 
    console.log("entrada invalida");
} 
else{
    lexico.getCadena();
    do{
        muestraResultado(lexico.cad, lexico.simbolo, lexico.tipo);
        lexico.getCadena();
    } while(lexico.cad != "$");
}

function muestraResultado(sim, tipo, id){
    console.log(sim + "\t\t\t\t" + tipo + "\t\t\t\t" + id);
}