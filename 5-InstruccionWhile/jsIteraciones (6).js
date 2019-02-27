function mostrar()
{

	var contador;
	var acumulador;
	var suma;
	var promedio;
	var num;

	contador = 0;
	acumulador = 0;

	while(contador < 5)
	{
		contador++;
		num = prompt("Ingrese un numero.");
		num = parseInt(num);
		acumulador += num;
	}

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / 5;

}//FIN DE LA FUNCIÓN