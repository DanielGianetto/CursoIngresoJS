function mostrar()
{

	var planetas;
	var mensaje;

	planetas = prompt("Ingrese un planeta: ");

	switch(planetas)
	{
		case "mercurio":
		case "venus":
			mensaje = "Aca hace más calor.";
			break;
		case "tierra":
			mensaje = "Aca vivimos nosotros.";
			break;
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			mensaje = "Aca hace más frio.";
			break;
		default:
			mensaje = "Planeta enano o no valido.";
			break;
	}
	alert(mensaje);
	
}
