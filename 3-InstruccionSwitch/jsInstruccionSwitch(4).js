function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;


switch(mesDelAño)
{
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
	case "Enero":
		alert("Este mes tiene 31 días");
		break;
	case "Febrero":
		alert("Este mes tiene 28 días.");
		break;
	default:
		alert("Este mes tiene 30");
		break;
}



//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN