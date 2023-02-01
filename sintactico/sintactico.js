//las celdas vacias son 0
//las reducciones son numeros negativos r0 (aceptacion) es -1, r1 es -2, etc.
//los desplazamientos son numeros positivos d3 es 3, d2 es 2, etc.

import { NoTerminal } from "../clases/NoTerminal.js";
import { Terminal } from "../clases/Terminal.js";
import { Elemento } from "../clases/Elemento.js";

export class Sintactico{
    
    constructor(src) {
        this.lexico = src;  
        this.pila = [];
        this.aceptacion = false;
        this.accion = 0;
        this.contadorSimbolos = 0;
        this.tablaE1 = [
            [2 ,0 , 0 ,1],
            [0 ,0 ,-1 ,0],
            [0 ,3 , 0 ,0],
            [4 ,0 , 0 ,0],
            [0 ,0 ,-2 ,0]
        ];
        this.tablaE2 = [
            [2 ,0 , 0 ,1],
            [0 ,0 ,-1 ,0],
            [0 ,3 ,-3 ,0],
            [2 ,0 , 0 ,4],
            [0 ,0 ,-2 ,0]
        ];
    }

    analizaSintactico(lexico){
        let terminal = new Terminal("$"); //terminal son las palabras
        let noTerminal = new NoTerminal("E"); //no terminal es E
        let elemento = new Elemento(0); //elemento son los numeros

        let col = 0;
        let row = 0;
        let E = 3;
        let elementoIzq = 0;
        
        this.pila.unshift(terminal);
        this.pila.unshift(elemento);

        lexico.getSimbolo(); //analiza una simbolo de la src
        
        if(lexico.cad != "$"){ // si la src no esta vacia
            while(lexico.cad != "$" || !this.aceptacion){
                let ter = new Terminal(""); //terminal son las palabras
                let noTer = new NoTerminal("E"); //no terminal es E
                let ele = new Elemento(0); //elemento son los numeros

                row = this.pila[0].dato;
                col = lexico.tipo;
    
                this.accion = this.tablaE1[row][col];
    
                if(this.accion > 0){
                    //desplazamiento
                    ter.dato = lexico.cad;
                    ele.dato = this.accion;
                    this.pila.unshift(ter);
                    this.pila.unshift(ele);
                } else if(this.accion < 0){
                    //reduccion
                    switch (this.accion) {
                        case -1:
                            console.log("aceptacion");
                            this.aceptacion = true;
                            break;
                        case -2:
                            for (let i = 0; i < 6; i++) { //regla 1 E -> id + E
                                this.pila.shift();
                            }
                            break;
                        case -3:
                            for (let i = 0; i < 2; i++) { //regla 2 E -> id
                                this.pila.shift();
                            }
                            break;
                        default:
                            break;
                    }

                    elementoIzq = this.pila[0].dato;
                    ele.dato = this.tablaE1[elementoIzq][E];
                    
                    if(!this.aceptacion){
                        this.pila.unshift(noTer);
                        this.pila.unshift(ele);
                        this.printTableRow(lexico.cad);
                    }
                    
                } else {
                    //error
                    break;
                }
    
                if(this.accion > 0)
                    this.printTableRow(lexico.cad);
                
                lexico.getSimbolo();
                this.contadorSimbolos++;
            }
        }
    }

    printTableRow(cad){
        console.log(this.printPila() + "\t\t\t" + cad + "\t\t\t" + this.accion);
    }

    printPila(){
        let strPila = ""; 
        for (let index = this.pila.length-1; index >= 0; index--) {
            strPila += this.pila[index].dato;
        }
        return strPila;
    }

}