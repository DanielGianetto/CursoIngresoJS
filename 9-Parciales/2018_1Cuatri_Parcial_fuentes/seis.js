function mostrar()
{

	var hora;
	var mensaje;

	hora = document.getElementById('laHora').value;

	switch(hora)
	{
		case "6":
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			mensaje = "Es de mañana.";
			break;
		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
			mensaje = "Es de tarde.";
			break;
		default:
			mensaje = "Es de noche.";
			if(mensaje == "Es de noche." && hora < 24 && hora >= 20)
			{
				mensaje = "A dormir!.";
			}
			else
			{
				if(hora > 24 || hora < 1)
				{
					mensaje = "La hora ingresada no es válida";
				}
			}
		
	}

	alert(mensaje);

}
