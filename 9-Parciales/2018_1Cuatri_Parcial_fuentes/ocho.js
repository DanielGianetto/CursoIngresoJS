function mostrar()
{

	var numero;
	var letra;
	var respuesta;
	var cantPares;
	var cantImpares;
	var cantCeros;
	var acumulador;
	var cantPositivos;
	var promedio;
	var acumuladorNegativo;
	var numMax;
	var letraMax;
	var numMin;
	var letraMin;
	var mensajePares;
	var mensajeImpares;
	var mensajeCeros;
	var mensajePromedio;
	var mensajeNumMin;

	respuesta = true;
	cantPares = 0;
	cantImpares = 0;
	cantCeros = 0;
	acumulador = 0;
	cantPositivos = 0;
	acumuladorNegativo = 0;
	numMax = 0;
	numMin = 100;

	while(respuesta != false)
	{
		letra = prompt("Ingrese una letra:");
		while(isNaN(letra) == false)
		{
			letra = prompt("Ingrese una letra valida:");
		}//validar letra.
		console.log(letra);

		numero = prompt("Ingrese un número:");
		numero = parseInt(numero);
		while(isNaN(numero) == true || numero < -100 || numero > 100)
		{
			numero = prompt("Ingrese un número valido:");
		}//validar número.
		console.log(numero);

		if(numero % 2 != 0)
		{
			cantImpares++;
			mensajeImpares = ". Cantidad de números impares: " + cantImpares;
		}//cant impares.
		else
		{
			cantPares++;
			mensajePares = "Cantidad de números pares: " + cantPares;		
		}//cant pares.

		if(numero == 0) 
		{
			cantCeros++;
			mensajeCeros = ". Cantidad de ceros: " + cantCeros;
		}//cant ceros.

		if(numero > 0) 
		{	
			acumulador += numero;
			cantPositivos++;
			promedio = acumulador / cantPositivos;
			mensajePromedio = ". Promedio: " + promedio;
		}//promedio de positivos.

		if(numero < 0)
		{
			acumuladorNegativo += numero;
			mensajeSumaNegativos = ". Suma de negativos: " + acumuladorNegativo;
		}//suma de negativos.

		while(numero < numMin)
		{
			numMin = numero;
			mensajeNumMin = ". Numero minimo y letra del numero minimo: " + numMin + letra;
		}//numero min + letra.

		while(numero > numMax)
		{
			numMax = numero;
			mensajeNumMax = ". Numero maximo y letra del numero maximo: " + numMax + letra;
		}//numero min + letra.

		respuesta = confirm("¿Desea continuar?");
	}

	document.write(mensajePares + mensajeImpares  + mensajeCeros + mensajePromedio + mensajeSumaNegativos + mensajeNumMin + mensajeNumMax);

}
