function mostrar()
{
//Cada habitación de un hotel tiene un precio, hay promociones segun el tipo de pago,
//si es con tarjeta visa un 10%, si es por paypal un 15%, por mercadoPago un 10%, 
//efectivo 20%, cualquier otro medio solo un 5%
//Si compraste el paquete "todoincluido" y pagas con paypal se le suma un 10% al descuento,
//si el paquete es "todoincluido" le suma un 15% y para el resto de los paquestes no tiene 
//descuento adicional.

var medioDePago;
var promocion1;
var promocion2;
var importe;
var total;
var mensaje;
var paquete;

medioDePago = prompt("Ingrese medio de pago: ");
paquete = prompt("Ingrese que paquete desea comprar: ");

importe = prompt("ingrese importe: $");
importe = parseInt(importe);


switch(medioDePago)
{
	case "tarjeta visa":
	case "mercadoPago":
		promocion1 = 10;
		break;
	case "paypal":
		promocion1 = 15;
		break;
	case "efectivo":
		promocion1 = 20;
		break;
	case "otro":
		promocion1 = 5;
		break;		
}

promocion1 = (importe * promocion1) / 100;
parseInt(promocion1);
total = importe - promocion1;
mensaje = total;

switch(paquete)
{
	case "todoincluido":
		promocion2 = 15;
		break;
	default:
		break;
}
switch(paquete)
{
	case "todoincluido":	
	case "paypal":
		promocion2 = 10;
		break;
	default:
		break;
}

promocion2 = (importe * promocion2) / 100;
parseInt(promocion2);
total = (importe - promocion1) - promocion2;
mensaje = total;

alert("El total a pagar es: $" + mensaje);

}
