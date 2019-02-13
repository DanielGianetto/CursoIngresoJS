function mostrar()
{
/*
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
*/

//al realizar una compra, si compra de mas de dos productos se
//realiza un descuento del 10% y si supera los $2000 se agrega un 
//descuento adicional de 15%, si el pago es con tarjeta y no en efectivo
//al precio final se le agrega un 10% de recargo.

var productos;
var precio;
var descuento1;
var descuento2;
var recargo;
var precioFinal;
var medioDePago;

productos = prompt("Cantidad de productos: ");
productos = parseInt(productos);

precio = prompt("Ingresar precio: ");
precio = parseInt(precio);

medioDePago = prompt("¿Efectivo o Tarjeta?");

if(productos >= 2)
{
	descuento1 = (precio * 10)/100;
	descuento1 = parseInt(descuento1);
	precioFinal = precio-descuento1;

	if(precio >= 2000)
	{
		descuento1 = (precio * 10)/100;
		descuento1 = parseInt(descuento1);
		descuento2 = (precio * 15)/100;
		descuento2 = parseInt(descuento2);
		precioFinal = (precio-descuento1)-descuento2;
	}		
} 

if(medioDePago == "Tarjeta" || medioDePago == "tarjeta")
{
	recargo = (precio * 10)/100;
	recargo = parseInt(recargo);
	precioFinal = precio+recargo;	
}
else if(medioDePago == "Efectivo" || medioDePago == "efectivo")
{
	precioFinal = precio;
}

alert("Total a pagar: $" + precioFinal);

/*if(producto1 > 0 && producto2 > 0)
{
	precioFinal = precio-descuento1;
	alert("Total a pagar: $" + precioFinal);
		if(medioDePago == "Tarjeta")
		{
			precioFinal = (precio-descuento1)+recargo;
			alert("Total a pagar con tarjeta: $" + precioFinal);
		}
}
if(precio >= 2000)
{
	precioFinal = (precio-descuento1)-descuento2;
	alert("Total a pagar con descuento del 15%: $" + precioFinal);
		if(medioDePago == "Tarjeta")
		{
			precioFinal = (precio-descuento1-descuento2)+recargo;
			alert("Total a pagar con tarjeta: $" + precioFinal);
		}
}*/


		



}
