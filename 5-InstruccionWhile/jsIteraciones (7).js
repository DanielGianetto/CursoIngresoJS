function mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var num;

	contador = 0;
	acumulador = 0;
	respuesta = true;

	while(respuesta != false)
	{
		contador++;
		num = prompt("Ingrese un número.");
		num = parseInt(num);
		acumulador += num;
		respuesta = confirm("¿Desea continuar?.");	
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN