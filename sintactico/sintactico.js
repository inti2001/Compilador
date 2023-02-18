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
        this.tablaLR = [
            [0,	0,	0,	0,	5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-3,	1,	2,	3,	4,	0,	6,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-2,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-3,	0,	7,	3,	4,	0,	6,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	-5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [8,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	-6,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-6,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-4,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-8,	10,	11,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	9,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	12,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [13,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	15,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-11,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	14,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-7,	0,	0,	0,	-7,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-7,	0,	-7,	-7,	-7,	0,	-7,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-8,	10,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	16,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	17,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [18,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-9,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	20,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	19,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	22,	0,	-13,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	21,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	-10,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-10,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [27,	0,	0,	0,	5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-16,	0,	28,	29,	30,	0,	0,	0,	0,	0,	25,	0,	0,	0,	0,	0,	23,	24,	0,	26,	0,	0,	0,	0,	0,	0,	31,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-12,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	32,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	33,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [27,	0,	0,	0,	5,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-16,	0,	28,	29,	30,	0,	0,	0,	0,	0,	25,	0,	0,	0,	0,	0,	34,	24,	0,	26,	0,	0,	0,	0,	0,	0,	31,	0,	0,],
            [-18,	0,	0,	0,	-18,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-18,	0,	-18,	-18,	-18,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-19,	0,	0,	0,	-19,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-19,	0,	-19,	-19,	-19,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	36,	0,	0,	0,	35,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	37,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	38,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	-30,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	39,	0,	0,	44,	45,	0,	40,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	50,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [51,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	-15,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-15,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-17,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	52],
            [46,    47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	-32,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	53,	0,	44,	45,	0,	54],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	55],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	56],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	57,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	63,	62,	0,	61,	-31,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	64],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	65],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	66],
            [0,	0,	0,	0,	0,	-53,	-53,	-53,	-53,	-53,	0,	-53,	-53,	-53,	0,	-53,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-36,	-36,	-36,	-36,	-36,	0,	-36,	-36,	-36,	0,	-36,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-37,	-37,	-37,	-37,	-37,	0,	-37,	-37,	-37,	36,	-37,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-38,	-38,	-38,	-38,	-38,	0,	-38,	-38,	-38,	0,	-38,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-39,	-39,	-39,	-39,	-39,	0,	-39,	-39,	-39,	0,	-39,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-40,	-40,	-40,	-40,	-40,	0,	-40,	-40,	-40,	0,	-40,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-26,	0,	0,	0,	-26,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-26,	0,	-26,	-26,	-26,	-26,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	22,	0,	-13,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	67,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	63,	62,	0,	61,	68,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	69,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	63,	62,	0,	61,	0,	71,	0,	-34,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	70,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	63,	62,	0,	61,	0,	0,	0,	72,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	63,	62,	0,	61,	0,	0,	0,	73,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-25,	0,	0,	0,	-25,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-25,	0,	-25,	-25,	-25,	-25,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	74],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	75],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	76],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	77],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	78],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	79],
            [0,	0,	0,	0,	0,	59,	58,	60,	63,	62,	0,	61,	0,	0,	0,	80,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-45,	-45,	-45,	-45,	-45,	0,	-45,	-45,	-45,	0,	-45,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-46,	-46,	-46,	-46,	-46,	0,	-46,	-46,	-46,	0,	-46,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-14,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-22,	0,	0,	0,	-22,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-22,	0,	-22,	-22,	-22,	-22,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-41,	-41,	-41,	-41,	-41,	0,	-41,	-41,	-41,	0,	-41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-33,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [46,	47,	48,	49,	0,	42,	0,	0,	0,	0,	43,	0,	0,	0,	41,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	44,	45,	0,	81],
            [27,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	85,	0,	0,	28,	29,	30,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	83,	0,	84,	0,	0,	0,	0,	31,	82,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	85,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	86,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-47,	-47,	-47,	-47,	-47,	0,	-47,	-47,	-47,	0,	-47	,0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-48,	58,	-48,	-48,	-48,	0,	-48,	-48,	-48,	0,	-48,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	-49,	-49,	-49,	0,	-49,	-49,	-49,	0,	-49,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	-50,	-50,	0,	-50,	-50,	-50,	0,	-50,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	-51,	-51,	0,	61,	-51	-51,	0,	-51,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	-52,	62,	0,	61,	-52,	-52,	0,	-52,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	-44,	-44,	-44,	-44,	-44,	0,	-44,	-44,	-44,	0,	-44,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	59,	58,	60,	63,	62,	0,	61,	0,	71,	0,	-34,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	87,	0,	0,	0,	0,],
            [-27,	0,	0,	0,	-27,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-27,	0,	-27,	-27,	-27,	89,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	88,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-42,	0,	0,	0,	-42,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-42,	0,	-42,	-42,	-42,	-42,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-43,	0,	0,	0,	-43,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-43,	0,	-43,	-43,	-43,	-43,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [27,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-20,	0,	28,	29,	30,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	90,	91,	0,	0,	0,	0,	0,	0,	31,	0,	0,],
            [-24,	0,	0,	0,	-24,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-24,	0,	-24,	-24,	-24,	-24,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-35,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-23,	0,	0,	0,	-23,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-23,	0,	-23,	-23,	-23,	-23,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [27,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	85,	0,	0,	28,	29,	30,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	83,	0,	84,	0,	0,	0,	0,	31,	92,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	93,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [27,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-20,	0,	28,	29,	30,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	94,	91,	0,	0,	0,	0,	0,	0,	31,	0,	0,],
            [-28,	0,	0,	0,	-28,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-28,	0,	-28,	-28,	-28,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [-29,	0,	0,	0,	-29,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-29,	0,	-29,	-29,	-29,	-29,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,],
            [0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	-21,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,]
        ];
    }

    analizaSintactico(lexico){
        let terminal = new Terminal("$"); //terminal son las palabras
        let elemento = new Elemento(0); //elemento son los numeros
        let col = 0;
        let row = 0;
        let E = 3;
        let elementoIzq = 0;
        let reduccion = false;
        
        this.pila.unshift(terminal);
        this.pila.unshift(elemento); //la pila empieza con $0,

        lexico.getSimbolo(); //analiza una simbolo de la src

        if(lexico.cad != "$"){ // si no es el final de la src
            while(!this.aceptacion){
                let ter = new Terminal(""); //terminal son las palabras
                let noTer = new NoTerminal("E"); //no terminal es E
                let ele = new Elemento(0); //elemento son los numeros

                reduccion = false;
                row = this.pila[0].dato;
                col = lexico.tipo;
                //console.log(row + " " + col);
                //console.log(lexico.cad);
                this.accion = this.tablaLR[row][col];
    
                if(this.accion > 0){
                    //desplazamiento
                    ter.dato = lexico.cad;
                    ele.dato = this.accion;
                    this.pila.unshift(ter);
                    this.pila.unshift(ele);
                    
                } else if(this.accion < 0){
                    //reduccion
                    reduccion = true;
                    switch (this.accion) {
                        case -1: 
                            //regla 0, Aceptacion
                            this.aceptacion = true;
                            break;
                        case -2: 
                            E = 24; 
                            noTer.dato = "Prog";
                            for (let i = 0; i < 2; i++) { //regla 1 <programa> ::= <Definiciones>
                                this.pila.shift();
                            }                          
                            break;
                        case -3:
                            E = 25;                       //regla 2 <Definiciones> ::= \e     No se quitan datos de la pila
                            noTer.dato = "Defs";                        
                            break;
                        case -4:
                            E = 25; 
                            noTer.dato = "Defs";
                            for (let i = 0; i < 4; i++) { //regla 3 <Definiciones> ::= <Definicion> <Definiciones>     No se quitan datos de la pila
                                this.pila.shift();
                            }                                                      
                            break;
                        case -5:
                            E = 26;
                            noTer.dato = "Def";              
                            for (let i = 0; i < 2; i++) { //regla 4 <Definicion> ::= <DefVar>
                                this.pila.shift();
                            }
                            break;
                        case -6:    
                            E = 26;
                            noTer.dato = "Def";
                            for (let i = 0; i < 2; i++) { //regla 5 <Definicion> ::= <DefFunc>
                                this.pila.shift();
                            }
                            break;
                        case -7:    
                            E = 27;
                            noTer.dato = "DefVar";
                            for (let i = 0; i < 8; i++) { //regla 6 <DefVar> ::= tipo identificador <ListaVar> ;
                                this.pila.shift();
                            }
                            break;
                        case -8:                            
                            E = 28;                       //regla 7 <ListaVar> ::= \e     No se quitan datos de la pila
                            noTer.dato = "ListaVar";
                            break;
                        case -9:
                            E = 28;
                            noTer.dato = "ListaVar";
                            for (let i = 0; i < 6; i++) { //regla 8 <ListaVar> ::= , identificador <ListaVar>
                                this.pila.shift();
                            }
                            break;
                        case -10:
                            E = 29;
                            noTer.dato = "DefFunc";
                            for (let i = 0; i < 12; i++) { //regla 9 <DefFunc> ::= tipo identificador ( <Parametros> ) <BloqFunc>
                                this.pila.shift();
                            }
                            break;
                        case -11:
                            E = 30;                       //regla 10 <Parametros> ::= \e    No se quitan datos de la pila
                            noTer.dato = "Params";
                            break;
                        case -12:
                            E = 30;
                            noTer.dato = "Params";
                            for (let i = 0; i < 6; i++) { //regla 11 <Parametros> ::= tipo identificador <ListaParam>
                                this.pila.shift();
                            }
                            break;
                        case -13:
                            E = 31;                       //regla 12 <ListaParam> ::= \e    No se quitan datos de la pila
                            noTer.dato = "ListaParam";
                            break;
                        case -14:
                            E = 31;
                            noTer.dato = "ListaParam";
                            for (let i = 0; i < 8; i++) { //regla 13 <ListaParam> ::= , tipo identificador <ListaParam> 
                                this.pila.shift();
                            }
                            break;
                        case -15:
                            E = 32;
                            noTer.dato = "BloqFunc";
                            for (let i = 0; i < 6; i++) { //regla 14 <BloqFunc> ::= { <DefLocales> }  
                                this.pila.shift();
                            }
                            break;
                        case -16:
                            E = 33;                       //regla 15 <DefLocales> ::= \e    No se quitan datos de la pila
                            noTer.dato = "DefLocales";
                            break;
                        case -17:
                            E = 33;
                            noTer.dato = "DefLocales";
                            for (let i = 0; i < 4; i++) { //regla 16 <DefLocales> ::= <DefLocal> <DefLocales>
                                this.pila.shift();
                            }
                            break;
                        case -18:
                            E = 34;
                            noTer.dato = "DefLocal";
                            for (let i = 0; i < 2; i++) { //regla 17 <DefLocal> ::= <DefVar>
                                this.pila.shift();
                            }
                            break;
                        case -19:
                            E = 34;
                            noTer.dato = "DefLocal";
                            for (let i = 0; i < 2; i++) { //regla 18 <DefLocal> ::= <Sentencia> 
                                this.pila.shift();
                            }
                            break;
                        case -20:
                            E = 35;                       //regla 19 <Sentencias> ::= \e    No se quitan datos de la pila
                            noTer.dato = "Sentencias";
                            break;
                        case -21:
                            E = 35;
                            noTer.dato = "Sentencias";
                            for (let i = 0; i < 4; i++) { //regla 20 <Sentencias> ::= <Sentencia> <Sentencias>  
                                this.pila.shift();
                            }
                            break;
                        case -22:
                            E = 36;
                            noTer.dato = "Sentencia";
                            for (let i = 0; i < 8; i++) { //regla 21 <Sentencia> ::= identificador = <Expresion> ; 
                                this.pila.shift();
                            }
                            break;
                        case -23:
                            E = 36;
                            noTer.dato = "Sentencia";
                            for (let i = 0; i < 12; i++) { //regla 22 <Sentencia> ::= if ( <Expresion> ) <SentenciaBloque> <Otro> 
                                this.pila.shift();
                            }
                            break;
                        case -24:
                            E = 36;
                            noTer.dato = "Sentencia";
                            for (let i = 0; i < 10; i++) { //regla 23 <Sentencia> ::= while ( <Expresion> ) <Bloque>
                                this.pila.shift();
                            }
                            break;
                        case -25:
                            E = 36;
                            noTer.dato = "Sentencia";
                            for (let i = 0; i < 6; i++) { //regla 24 <Sentencia> ::= return <ValorRegresa> ;
                                this.pila.shift();
                            }
                            break;
                        case -26:
                            E = 36;
                            noTer.dato = "Sentencia";
                            for (let i = 0; i < 4; i++) { //regla 25 <Sentencia> ::= <LlamadaFunc> ; 
                                this.pila.shift();
                            }
                            break;
                        case -27:
                            E = 37;                       //regla 26 <Otro> ::= \e    No se quitan datos de la pila
                            noTer.dato = "Otro";
                            break;
                        case -28:
                            E = 37;
                            noTer.dato = "Otro";
                            for (let i = 0; i < 4; i++) { //regla 27 <Otro> ::= else <SentenciaBloque> 
                                this.pila.shift();
                            }
                            break;
                        case -29:
                            E = 38;
                            noTer.dato = "Bloque";
                            for (let i = 0; i < 6; i++) { //regla 28 <Bloque> ::= { <Sentencias> } 
                                this.pila.shift();
                            }
                            break;
                        case -30:
                            E = 39;                       //regla 29 <ValorRegresa> ::= \e    No se quitan datos de la pila
                            noTer.dato = "ValorRegresa";
                            break;
                        case -31:
                            E = 39;
                            noTer.dato = "ValorRegresa";
                            for (let i = 0; i < 2; i++) { //regla 30 <ValorRegresa> ::= <Expresion> 
                                this.pila.shift();
                            }
                            break;
                        case -32:
                            E = 40;                       //regla 31 <Argumentos> ::= \e    No se quitan datos de la pila
                            noTer.dato = "Args";
                            break;
                        case -33:
                            E = 40;
                            noTer.dato = "Args";
                            for (let i = 0; i < 4; i++) { //regla 32 <Argumentos> ::= <Expresion> <ListaArgumentos>
                                this.pila.shift();
                            }
                            break;
                        case -34:
                            E = 41;                       //regla 33 <ListaArgumentos> ::= \e    No se quitan datos de la pila
                            noTer.dato = "ListaArgs";
                            break;
                        case -35:
                            E = 41;
                            noTer.dato = "ListaArgs";
                            for (let i = 0; i < 6; i++) { //regla 34 <ListaArgumentos> ::= , <Expresion> <ListaArgumentos>
                                this.pila.shift();
                            }
                            break;
                        case -36:
                            E = 42;
                            noTer.dato = "Termino";
                            for (let i = 0; i < 2; i++) { //regla 35 <Termino> ::= <LlamadaFunc> 
                                this.pila.shift();
                            }
                            break;
                        case -37:
                            E = 42;
                            noTer.dato = "Termino";
                            for (let i = 0; i < 2; i++) { //regla 36 <Termino> ::= identificador
                                this.pila.shift();
                            }
                            break;
                        case -38:
                            E = 42;
                            noTer.dato = "Termino";
                            for (let i = 0; i < 2; i++) { //regla 37 <Termino> ::= entero
                                this.pila.shift();
                            }
                            break;
                        case -39:
                            E = 42;
                            noTer.dato = "Termino";
                            for (let i = 0; i < 2; i++) { //regla 38 <Termino> ::= real
                                this.pila.shift();
                            }
                            break;
                        case -40:
                            E = 42;
                            noTer.dato = "Termino";
                            for (let i = 0; i < 2; i++) { //regla 39 <Termino> ::= cadena
                                this.pila.shift();
                            }
                            break;
                        case -41:
                            E = 43;
                            noTer.dato = "LlamadaFunc";
                            for (let i = 0; i < 8; i++) { //regla 40 <LlamadaFunc> ::= identificador ( <Argumentos> )
                                this.pila.shift();
                            }
                            break;
                        case -42:
                            E = 44;
                            noTer.dato = "SentenciaBloque";
                            for (let i = 0; i < 2; i++) { //regla 41 <SentenciaBloque> ::= <Sentencia>
                                this.pila.shift();
                            }
                            break;
                        case -43:
                            E = 44;
                            noTer.dato = "SentenciaBloque";
                            for (let i = 0; i < 2; i++) { //regla 42 <SentenciaBloque> ::= <Bloque>
                                this.pila.shift();
                            }
                            break;
                        case -44:
                            E = 45;
                            noTer.dato = "Expresion";
                            for (let i = 0; i < 6; i++) { //regla 43 <Expresion> ::= ( <Expresion> )
                                this.pila.shift();
                            }
                            break;
                        case -45:
                            E = 45;
                            noTer.dato = "Expresion";
                            for (let i = 0; i < 4; i++) { //regla 44 <Expresion> ::= opSuma <Expresion>
                                this.pila.shift();
                            }
                            break;
                        case -46:
                            E = 45;
                            noTer.dato = "Expresion";
                            for (let i = 0; i < 4; i++) { //regla 45 <Expresion> ::= opNot <Expresion>
                                this.pila.shift();
                            }
                            break;
                        case -47:
                            E = 45;
                            noTer.dato = "Expresion";
                            for (let i = 0; i < 6; i++) { //regla 46 <Expresion> ::= <Expresion> opMul <Expresion>
                                this.pila.shift();
                            }
                            break;
                        case -48:
                            E = 45;
                            noTer.dato = "Expresion";
                            for (let i = 0; i < 6; i++) { //regla 47 <<Expresion> ::= <Expresion> opSuma <Expresion> 
                                this.pila.shift();
                            }
                            break;
                        case -49:
                            E = 45;
                            noTer.dato = "Expresion";
                            for (let i = 0; i < 6; i++) { //regla 48 <Expresion> ::= <Expresion> opRelac <Expresion>
                                this.pila.shift();
                            }
                            break;
                        case -50:
                            E = 45;
                            noTer.dato = "Expresion";
                            for (let i = 0; i < 6; i++) { //regla 49 <Expresion> ::= <Expresion> opIgualdad <Expresion>
                                this.pila.shift();
                            }
                            break;
                        case -51:
                            E = 45;
                            noTer.dato = "Expresion";
                            for (let i = 0; i < 6; i++) { //regla 50 <Expresion> ::= <Expresion> opAnd <Expresion> 
                                this.pila.shift();
                            }
                            break;
                        case -52:
                            E = 45;
                            noTer.dato = "Expresion";
                            for (let i = 0; i < 6; i++) { //regla 51 <Expresion> ::= <Expresion> opOr <Expresion> 
                                this.pila.shift();
                            }
                            break;
                        case -53:
                            E = 45;
                            noTer.dato = "Expresion";
                            for (let i = 0; i < 2; i++) { //regla 52 <Expresion> ::= <Termino>  
                                this.pila.shift();
                            }
                            break;
                        default:break;
                    }
                    elementoIzq = this.pila[0].dato;
                    ele.dato = this.tablaLR[elementoIzq][E];
                    
                    if(!this.aceptacion){
                        this.pila.unshift(noTer);
                        this.pila.unshift(ele);
                        //console.log(this.printPila()); //mostrar analisis sintactico
                    }

                } else {
                    //error
                    break;
                }
    
                if(this.accion > 0)
                    //console.log(this.printPila()); //mostrar analisis sintactico
                
                if(!reduccion)
                    lexico.getSimbolo();             
            }
        }

        if(this.aceptacion){
            console.log("Aceptacion");
            return true;
        }       
        else{
            console.log("Error");
            return false
        }
            
    }

    printPila(){
        let strPila = ""; 
        for (let index = this.pila.length-1; index >= 0; index--) {
            strPila += this.pila[index].dato;
        }
        return strPila;
    }

}