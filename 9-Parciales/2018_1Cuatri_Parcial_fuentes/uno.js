
function mostrar()
{

/*var anchoR;
var largoR;
var perimetroR;

anchoR = prompt("Ingrese el ancho del rectángulo: ");
largoR = prompt("Ingrese el largo del rectángulo: ");
perimetroR = (anchoR*2)+(largoR*2);

alert("El perímetro es de: " + perimetroR + "cm");
*/

//alert ("ustedes son xxxx y xxxx, sus edades son xx y xx,
// y la suma de sus edades es xx")

var nombre1;
var nombre2;
var edad1;
var edad2;
var suma;

nombre1 = prompt("Ingrese su nombre: ");
nombre2 = prompt("Ingrese su nombre: ");

edad1 = prompt("Ingrese su edad: ");
edad1 = parseInt(edad1);
edad2 = prompt("Ingrese su edad: ");
edad2 = parseInt(edad2);

suma = edad1+edad2;

alert("Ustedes son "+nombre1+" y "+nombre2+", sus edades son "+edad1+" y "+edad2+" años, y la suma de sus edades es: "+suma);

}
