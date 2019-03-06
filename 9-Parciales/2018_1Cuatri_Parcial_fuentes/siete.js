function mostrar()
{
	var nota;
	var sexo;
	var contador;
	var acumulador;
	var promedio;
	var mensajePromedio;
	var notaBaja;
	var mensajeNotaBaja;
	var contadorMasDeSeis;
	var mensajeMasDeSeis;

	contador = 0;
	acumulador = 0;
	notaBaja = 10;
	contadorMasDeSeis = 0;

	while(contador < 5)
	{
		nota = prompt("Ingrese la nota:");
		nota = parseInt(nota);
		contador++;
		while(isNaN(nota) == true || nota < 1 || nota > 10)
		{
			nota = prompt("Intente de nuevo:");
		}
		console.log(nota);

		sexo = prompt("Ingrese f o m:");
		while(isNaN(sexo) == false || sexo != "f" && sexo != "m")
		{
			sexo = prompt("Intente de nuevo:");
		}
		console.log(sexo);

		promedio = (acumulador += nota) / contador;
		mensajePromedio = "Promedio de notas: " + promedio;
		// A.

		if(nota < notaBaja)
		{
			notaBaja = nota;
			mensajeNotaBaja = ". La nota más baja es: " + notaBaja + ". Sexo del alumno: " + sexo;
		}// B.

		if(nota >= 6)
		{
			contadorMasDeSeis++;
			mensajeMasDeSeis = ". Cantidad de varones con nota mayor o igual a 6: " + contadorMasDeSeis;
		}// C.
	}

	alert(mensajePromedio + mensajeNotaBaja + mensajeMasDeSeis);
}
