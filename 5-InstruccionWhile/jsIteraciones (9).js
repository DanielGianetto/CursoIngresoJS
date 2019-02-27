function mostrar()
{

	var contador;
	var respuesta;
	var max;
	var min;

	contador = 0;
	respuesta = true;
	maximo = 0;
	minimo = 0;

	while(respuesta != false)
	{
		contador++;
		var num;
		num = prompt("Ingrese un número.");
		num = parseInt(num);
		if(num <= minimo)
		{
			minimo = num;
			minimo = parseInt(minimo);
		}
		else
		{
			maximo = num;
			maximo = parseInt(maximo);
		}
		respuesta = confirm("¿Desea continuar?.");	
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;


}//FIN DE LA FUNCIÓN