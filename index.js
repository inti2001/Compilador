import { Lexico } from "./lexico/clases/lexico.js";
import { Sintactico } from "./sintactico/sintactico.js";
import { Nodo } from "./clases/Nodo.js";

//hola+mundo
//int main(){int a; if(a == 7){a = 8;}}
//int main(){int a;}
//int main(int x, int y){int a,b; funcion(hola, adios, okay);}
let src = "int main(int x, int y){int a,b; funcion(10 == (20 - 1));}";
let lexico = new Lexico(src);
let sintactico = new Sintactico(lexico);
let arbol = new Nodo();
let num = 1;

//analizaLexico();

arbol = sintactico.analizaSintactico(lexico)
if(arbol){
    //console.log("Entrada Aceptada");
    muestraArbol(arbol);
}
    

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

function muestraArbol(arbol){
    console.log("Arbol Semantico");
    console.log(arbol.dato);
    printHijos(arbol.hijos, num);
}

function printHijos(hijos, nEspacios){
    let cad;
    num++;
    if(typeof hijos != "undefined"){
        for(let i = 0; i < hijos.length; i++){
            cad = "";
            for(let j = 0; j < nEspacios; j++){
                cad += " ";
            }
            cad += hijos[i].dato;
            console.log(cad);
            printHijos(hijos[i].hijos, num);
        }
    }

    
}