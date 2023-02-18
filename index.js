import { Lexico } from "./lexico/clases/lexico.js";
import { Sintactico } from "./sintactico/sintactico.js";

//hola+mundo
//a+b+c+d+e+f
let src = "int main(){int a; while(a != 2){a=a+a;}}";
let lexico = new Lexico(src);
let sintactico = new Sintactico(lexico);

//analizaLexico();
if(sintactico.analizaSintactico(lexico))
    console.log("Entrada Aceptada");



function analizaLexico(){
    if(src.length <= 0) { 
        console.log("entrada invalida");
    } 
    else{
        lexico.getSimbolo();
        do{
            muestraResultado(lexico.cad, lexico.simbolo, lexico.tipo);
            lexico.getSimbolo();
        } while(lexico.cad != "$");
    }
}

function muestraResultado(sim, tipo, id){
    console.log(sim + "\t\t\t\t" + tipo + "\t\t\t\t" + id); 
}