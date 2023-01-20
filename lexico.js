
//Compilador (Lexico)
const salida = [];
var t;
var entrada = "jajalol 23 34.23464 - * + / = > >= < && || ! ( { } ) ; if while return void else float int";
//Hola 25 + float && while int || x estring12 else 12.34 & > < @
const partes = getStrings(entrada);

var lexico = {
    tipo: 0,
    simbolo: "default",
    cad: " "
}

for(var i = 0; i < partes.length; i++){
    analizaLexico(partes[i]);
}

console.log("cad\tsimbolo\ttipo");
salida.forEach(element => {
    console.log(element.cad + "\t" + element.simbolo + "\t" + element.tipo)
});

function analizaLexico(cad){ 
    if(cad[0].match(/^[A-Za-z]+$/)){        //el primer caracter es letra  
        t = checkReservada(cad); 
        if(t != 0){                         //es reservada
          if(t == 4){
            addLexico("tipo", t, cad);
          }
          else{
            addLexico(cad, t, cad);
          }
        }
        else if(checkIdentificador(cad)){
            addLexico("identificador", 0, cad);
        }
    }
    else if(cad[0].match(/^[\<\>\=\!\|\&\{\}\(\)\;\,\+\-\/\*]+$/)){ //checar relacionales, asignacion, logicos, parentesis y llaves
        var res = checkRelacional(cad);
        if(res != 0){
            switch (res) {
                case 5: addLexico("opSuma", res, cad); break;
                case 6: addLexico("opMul", res, cad); break;
                case 7: addLexico("opRelac", res, cad); break;
                case 8: addLexico("opOr", res, cad); break;
                case 9: addLexico("opAnd", res, cad); break;
                case 10: addLexico("opNot", res, cad); break;
                case 11: addLexico("opIgualdad", res, cad); break;
                case 12: 
                case 13: 
                case 14: 
                case 15: 
                case 16: 
                case 17: 
                case 18: 
                        addLexico(cad, res, cad); break;
            }      
        }
        if(cad == "&" || cad == "|"){
            console.log("es una entrada no aceptada", cad);
        }
    }
    else{                                   //es numero
        if(checkDecimal(cad)){
            addLexico("real", 2, cad);
        }
        else if(checkEntero(cad)){           
            addLexico("entero", 1, cad);
        }
        else{
            console.log("es una entrada no aceptada", cad);
        }
    }

    if(lexico.cad != " "){
        salida.push(lexico);
    }
    
    clearLexico();
}

function clearLexico(){
    lexico = {
        simbolo: "",
        tipo: 0,
        cad: " "
    }
}

function addLexico(sim, tip, str){
    lexico = {simbolo: sim, tipo: tip, cad: str}
}

function checkRelacional(str){
    switch (str) {
        case "+":
        case "-":
            return 5;
        case "*":
        case "/":
            return 6; 
        case ">":
        case "<":
        case ">=":     
        case "<=":
            return 7;
        case "||":
            return 8;
        case "&&":
            return 9; 
        case "!":
            return 10;
        case "==":
        case "!=":
            return 11;
        case ";":
            return 12;
        case ",":
            return 13;
        case "(":
            return 14;
        case ")":
            return 15;
        case "{":
            return 16;
        case "}":
            return 17;
        case "=":
            return 18;
        default:
            return 0;
    }
}

function checkDecimal(str){
    return str.match(/^\d+\.\d+$/);
}

function checkEntero(str){
    return str.match(/^\d+$/);
}

function checkIdentificador(str){
    return str.match(/^\w+$/);
}

function checkReservada(str){
    switch (str) {
        case "float":
            return 4;
        case "int":
            return 4;
        case "void":
            return 4;
        case "if":
            return 19;
        case "while":
            return 20;
        case "return":
            return 21;
        case "else":
            return 22;
        default:
            return 0;
    }
}

function getStrings(input){
    const stringArr = [];

    var partStr = "";
    var meQuede = 0;

    while(meQuede < input.length){
        if(input[0] != " "){ //si no empieza con espacio
            for(var i = meQuede; i < input.length; i++){
                if(input[i] == " "){           
                    break;
                }
                partStr += input[i];
            }
            
            stringArr.push(partStr);
            meQuede = i+1;
            partStr = "";    
        } 
    }

    return stringArr;
}


