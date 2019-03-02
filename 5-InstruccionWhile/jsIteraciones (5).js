function mostrar()
{

	var sexo;

	sexo = prompt("Ingrese f ó m.");

	while(sexo != "f" && sexo != "m")
	{
		sexo = prompt("Intente de nuevo, recuerde f para femenino y m para masculino.");
	}

	document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN