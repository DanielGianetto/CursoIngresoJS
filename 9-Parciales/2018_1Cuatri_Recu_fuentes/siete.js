function mostrar()
{
	var contador;
	var acumulador;
	var nota;
	var promedio;
	var sexo;
	var sexoNotaBaja;
	var sexoNotaMax;
	var notaBaja;
	var notaMax;

	contador = 0;
	acumulador = 0;
	notaBaja = 0;
	notaMax = 0;

	while(contador < 5)
	{
		nota = prompt("Ingrese la nota.");
		while(isNaN(nota) == true || nota < 0 || nota > 10)
		{
			nota = prompt("Ingrese la nota otra vez.");
		}
		acumulador += nota;

		nota = prompt("Ingrese el sexo.");
		while(isNaN(sexo) == false || sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingrese el sexo otra vez.");
		}

		if(contador == 0)
		{
			promedio = acumulador / contador;
			mensaje = "Promedio: " + promedio;
		}




		/*sexo = prompt("Ingrese f ó m: ");
		while(isNaN(sexo) == true && sexo != "f" || sexo != "m")
		{
			
		}*/

		contador++;
	}

}
