function mostrar()
{
  
 /* var nombre;
  var localidad;

  nombre = document.getElementById('elNombre').value;
  localidad = document.getElementById('laLocalidad').value;

  alert("Usted es " + nombre + " y vive en la localidad de " + localidad);*/

//alert("el precio del producto en efectivo es : $ xxxx, con tarjeta tiene un recargo del 10% que seria Sxx de recargo, costandole final $xxxx)

var precioTarjeta;
var recargo;
var precioFinal;

precioTarjeta = document.getElementById('elNombre').value;
precioTarjeta = parseInt(precioTarjeta);

recargo = (precioTarjeta * 10)/100;
recargo = parseInt(recargo);

precioFinal = precioTarjeta+recargo;
precioFinal = parseInt(precioFinal);

alert("el precio del producto en efectivo es: $" +precioTarjeta+ ", con tarjeta tiene un recargo del 10% que seria $"+recargo+" de recargo, costandole final: $"+precioFinal);


 
}
