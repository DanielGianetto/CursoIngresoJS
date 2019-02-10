function mostrar()
{

var precio1;
var descuento;
var porcentaje;
var precio2;
var precioFinal;

precio1 = prompt("Ingresar el precio: ");
descuento = prompt("Ingresar el descuento: ");

porcentaje = (precio1 * descuento) / 100;
porcentaje = parseInt(porcentaje);

precio2 = precio1 - porcentaje;
precio2 = parseInt(precio2);

precioFinal = precio2;
precioFinal = parseInt(precioFinal);

document.getElementById('elPrecioFinal').value = precioFinal;

}
