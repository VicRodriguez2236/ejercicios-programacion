//Elabora un programa calcule el perímetro de un triángulo equilátero. El programa pedirá al usuario las entradas necesarias.//

//Para poder calcular el perimetro de un triangulo equilatero necesitaremos la medida de uno de sus lados ya que los 3 son iguales//
var ladoIngresado;
var perimetro;
ladoIngresado =parseInt(prompt("Ingresa la medida de uno de sus lados del triangulo"))

perimetro =  ladoIngresado * 3;

prompt("El perimetro del triangulo es: " + perimetro);