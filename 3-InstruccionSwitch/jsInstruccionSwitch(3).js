function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;

switch(mesDelAño)
{
	case "Febrero":
		mensaje = "Este mes no tiene más de 29 días.";
		break;
	default:
		mensaje = "Este mes tiene 30 o más días";
		break;
}
alert(mensaje);



/*
switch(mesDelAño)
{
	case "Enero":
		alert("Este mes tiene 30 o más días");
		break;
	case "Febrero":
		alert("Este mes no tiene más de 29 días.");
		break;
	case "Marzo":
		alert("Este mes tiene 30 o más días");
		break;
	case"Abril":	
		alert("Este mes tiene 30 o más días");
		break;
	case "Mayo":
		alert("Este mes tiene 30 o más días");
		break;
	case "Junio":
		alert("Este mes tiene 30 o más días");
		break;
	case "Julio":
		alert("Este mes tiene 30 o más días");
		break;
	case "Agosto":
		alert("Este mes tiene 30 o más días");
		break;
	case "Septiembre":
		alert("Este mes tiene 30 o más días");
		break;
	case "Octubre":
		alert("Este mes tiene 30 o más días");
		break;
	case "Noviembre":
		alert("Este mes tiene 30 o más días");
		break;
	case "Diciembre":
		alert("Este mes tiene 30 o más días");
		break;
	case "Enero":
		alert("Este mes tiene 30 o más días");
		break;
	case "Febrero":
		alert("Este mes tiene 30 o más días");
		break;
	
}*/

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN