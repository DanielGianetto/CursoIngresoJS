function mostrar()
{
	var letra;
	var num;

	var cantPares;
	var cantImpares;
	var mensajePares;
	var mensajeImpares;

	var cantCeros;
	var mensajeCeros;

	var cantPositivos;
	var sumaPositivos;
	var promedio;
	var mensajePromedio;

	var sumaNegativos;
	var mensajeSumaNegativos;

	var numMax;
	var numMin;
	var mensajeNumMax;
	var mensajeNumMin;

	var respuesta;

	cantPares = 0;
	cantImpares = 0;
	cantCeros = 0;
	cantPositivos = 0;
	sumaPositivos = 0;
	sumaNegativos = 0;
	numMax = -100;
	numMin = 100

	while(respuesta != false)
	{
		letra = prompt("Ingrese una letra:");
		while(isNaN(letra) == false)
		{
			letra = prompt("Intente de nuevo:");
		}
		console.log(letra);

		num = prompt("Ingrese una número:");
		num = parseInt(num);
		while(isNaN(num) == true || num < -100 || num > 100)
		{
			num = prompt("Intente de nuevo:");
		}
		console.log(num);

		if(num % 2 != 0)
		{
			cantImpares++;
			mensajeImpares = "Cantidad de impares: " + cantImpares;
		}
		else
		{
			cantPares++;
			mensajePares = ". Cantidad de pares: " + cantPares;
		}// A y B.

		if(num == 0)
		{
			cantCeros++;
			mensajeCeros = ". Cantidad de ceros: " + cantCeros;
		}// C.

		if(num > 0)
		{
			sumaPositivos += num;
			cantPositivos++;
			promedio = sumaPositivos / cantPositivos;
			mensajePromedio = ". Promedio de positivos: " + promedio;
		}// D.

		if(num < 0)
		{
			sumaNegativos += num;
			mensajeSumaNegativos = ". Suma de negativos: " + sumaNegativos;
		}// E.

		if(num < numMin)
		{
			numMin = num;
			mensajeNumMin = ". Numero minimo y letra: " + numMin + letra;
		}
		else
		{
			if(num > numMax)
			{
				numMax = num;
				mensajeNumMax = ". Numero maximo y letra: " + numMax + letra;
			}
		}// F.

		respuesta = confirm("¿Desea continuar?");
	}

	document.write(mensajeImpares + mensajePares + mensajeCeros + mensajePromedio + mensajeSumaNegativos + mensajeNumMin + mensajeNumMax);
}



