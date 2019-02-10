function mostrar()
{

var num1;
var num2;
var suma;
var resta;

num1 = prompt("Ingrese el 1er número: ");
num1 = parseInt(num1);
num2 = prompt("Ingrese el 2do número; ");
num2 = parseInt(num2);

suma = num1+num2;
resta = num1-num2;

if(num1 == num2)
{
	alert("Se ingresaron el número " + num1 + " y el número " + num2);
}
else if(num1 > num2)
{
	resta;
	alert("Resultado: " + resta);
}
else if(num1 < num2)
{
	suma;
	if(suma > 10)
	{
		alert("La suma es " + suma + " y superó el 10");
	}
	//alert("Resultado: " + suma);
}



}
