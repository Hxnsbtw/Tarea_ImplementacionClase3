var Number1;
var Number2;
var Rnumber = 0;

Number1 = parseInt(prompt("Por favor ingrese el VALOR del PRIMER numero: "));
Number2 = parseInt(prompt("Ahora, ingrese el VALOR del SEGUNDO numero :"));

if (Number1 > Number2) {
    
    Rnumber = Number1 + Number2;
    alert("El resultado si el primer numero es mayor al segundo su valor es ----> " +Rnumber+ ", <----- Ya que los 2 valores se SUMAN");

} else if (Number1 < Number2) {
    
    Rnumber = (Number1*Number1) + (Number2*Number2);
    alert("El resultado si el primer numero es menor al segundo su valor es ---->" +Rnumber+ ", <----- Ya que se ELEVAN al cuadrado ambos valores y se SUMAN");

} else if (Number1 = Number2){

    alert("Los numeros son iguales, nada que hacer... xdd");
}

alert("Gracias por usar el sistemas, hasta luego :D");