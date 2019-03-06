function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var precioFinal;

	precio = prompt("Ingrese el precio:");
	precio = parseInt(precio);
	porcentaje = prompt("Ingrese el precio:");
	porcentaje = parseInt(porcentaje);

	descuento = (precio * porcentaje) / 100;

	precioFinal = precio - descuento;

	document.getElementById('elPrecioFinal').value = precioFinal;
}
