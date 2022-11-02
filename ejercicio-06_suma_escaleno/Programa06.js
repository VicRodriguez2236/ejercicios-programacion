//Elabora un programa que calcule el perímetro de un triángulo escaleno. El programa pedirá al usuario las entradas necesarias.//

//Para poder calcular el perimetro de un triangulo isóceles necesitaremos la medida de dos de sus 3 lados//

var lado1 = parseInt(prompt("Ingresa la medida del primer lado"));
var lado2 = parseInt(prompt("Ingresa la medida del segundo lado"));
var lado3 = parseInt(prompt("Ingresa la medida del tercer lado"));

if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    prompt("Las medidas que has ingresado no corresponden a un triangulo escaleno");
}else{
    var perimetro = lado1 + lado2 + lado3;
    prompt("El perimetro del triangulo es: " + perimetro);

}