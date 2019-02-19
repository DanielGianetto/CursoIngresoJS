function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;

switch(mesDelAño)
{
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
	case "Enero":
		mensaje = "Este mes tiene 31 días";
		break;
	case "Febrero":
		mensaje = "Este mes tiene 28 días.";
		break;
	default:
		mensaje = "Este mes tiene 30";
		break;
}
alert(mensaje);



//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN