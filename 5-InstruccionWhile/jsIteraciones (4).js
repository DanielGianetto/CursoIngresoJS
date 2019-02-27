function mostrar()
{

	var num;

	num = prompt("Ingrese un número.");

	while(num < 0 || num > 9)
	{
		num = prompt("Ingrese un número.");
	}

	document.getElementById('Numero').value = num;

}//FIN DE LA FUNCIÓN