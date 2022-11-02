//programa que reciba un número entre 1 y 50 y devuelva la suma de los números consecutivos del 1 hasta ese número.//

var suma = 0;
var numeroIngresado = parseInt(prompt("Ingrese un numero entre el 1 y el 50"));
if (numeroIngresado >= 1 && numeroIngresado <= 50) {
    suma = numeroIngresado
    numeroIngresado = numeroIngresado - 1;
    for (numeroIngresado; numeroIngresado >= 1; numeroIngresado--) {
        suma = suma + numeroIngresado;
    }
    prompt("La suma del 1 hasta el valor ingresado es igual a: " + suma);
}
else {
    prompt("Su numero no esta dentro del rango de 1 y 50. Intente nuevamente.");
}

