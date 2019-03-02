function mostrar()
{
	
	var nota;
	var sexo;
	var contador;
	var acumulador;
	var promedio;
	var mensajePromedio;
	var notaMasBaja;
	var mensajeNotaBaja;
	var contadorVarones;
	var mensajeVarones;

	contador = 0;
	acumulador = 0;
	notaMasBaja = 10;
	contadorVarones = 0;

	while(contador < 5)
	{
		nota = prompt("Ingrese una nota:");
		nota = parseInt(nota);
		contador++;
		while(isNaN(nota) == true || nota < 0 || nota > 10)
		{
			nota = prompt("Ingrese la nota otra vez.");
		}//validad nota.
		console.log(nota);
		sexo = prompt("Ingrese f o m:");
		while(isNaN(sexo) == false || sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingrese el sexo otra vez.");
		}//validar sexo.
		console.log(sexo);
		
		promedio = (acumulador += nota) / contador;
		mensajePromedio = "Promedio: " + promedio;
		//promedio (a).

		while(nota < notaMasBaja && sexo == "f" || nota < notaMasBaja && sexo == "m")
		{
			notaMasBaja = nota;
			mensajeNotaBaja = ". Nota más baja: " + notaMasBaja + ". Sexo: " + sexo + ".";
		}//nota más baja + sexo de la nota más baja (b).

		if(nota >= 6 && sexo == "m")
		{
			contadorVarones++;
			mensajeVarones = " Cant. de varones con nota mayor o igual a 6: " + contadorVarones + ".";
		}//cant. de varones con nota mayor o igual a 6 (c).
	}

	alert(mensajePromedio + mensajeNotaBaja + mensajeVarones);

}
