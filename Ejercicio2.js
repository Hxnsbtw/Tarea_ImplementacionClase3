var Monto = 0;
var Rmonto = 0;

Monto = parseFloat(prompt("Holaa, por favor ingrese aqui el monto a dar ( 0-100 ): "));

if (Monto > 100 ) {
    
    Rmonto = Monto - (Monto * 1 / 10);
    alert ("Su descuento aplicado es 10% y queda con valor de " + Rmonto );

} else if (Monto < 100) {
    
    Rmonto = Monto - (Monto * 2 / 100);
    alert ("Su descuento aplicado es 2% y queda con valor de " + Rmonto );

} else if (Monto = 100) {

    alert ("No es aplicado ningun descuento, gracias");

}

alert ("Gracias por usar este sistemas, ADIOS");