//Elabora un programa que calcule el perímetro de un triángulo isósceles. El programa pedirá al usuario las entradas necesarias.//

//Para poder calcular el perimetro de un triangulo isóceles pediremos las 3 medidas de sus 3 lados//

var base;
var lado1;
var lado2;

base = parseInt(prompt("Ingresa la medida de la base"));
lado1 = parseInt(prompt("Ingresa la medida del primer lado"));
lado2 = parseInt(prompt("Ingresa la medida del segundo lado"));

if (base == lado1 && base == lado2){
    prompt("Las medidas que has ingresado no corresponden a un triangulo isóceles");

}else{
    if (lado1 == lado2) {
        var perimetro = base + lado1 + lado2;
        prompt("El perimetro del triangulo es: " + perimetro);
    } else {
        prompt("Las lados que has ingresado no corresponden a un triangulo isóceles");

    }
}

