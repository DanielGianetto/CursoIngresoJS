function mostrar()
{

	var contador;
	var positivo;
	var negativo;
	var respuesta;
	var num;

	contador = 0;
	positivo = 0;
	negativo = 1;
	respuesta = true;

	while(respuesta != false)
	{

		contador++;
		num = prompt("Ingrese un número.");
		num = parseInt(num);
		console.log(num);
		if(num > 0)
		{
			positivo += num;
		}
		else
		{
			negativo *= num;
		}
		respuesta = confirm("¿Desea continuar?.");	
	}

	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN