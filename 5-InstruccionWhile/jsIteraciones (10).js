function mostrar()
{
	var contador;
	var acumulador;
	var num;
	var respuesta;
	var positivo;
	var negativo;
	var cantP; //Positivos
	var cantN; //Negativos
	var cantCeros;
	var cantPares;
	var promedioP; //Positivos
	var promedioN; //Negativos
	var diferencia;
	var mensajeP; //Positivos
	var mensajeN; //Negativos
	var mensajeCantP; //Positivos
	var mensajeCantN; //Negativos
	var mensajePares;
	var mensajePromedioP; //Positivos
	var mensajePromedioN; //Negativos
	var mensajeDiferencia;
	

	contador = 0;
	acumulador = 0;
	positivo = 0;
	negativo = 0;
	cantP = 0;
	cantN = 0;
	cantCeros = 0;
	cantPares = 0;
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
			mensajeP = "Suma de positivos: " + positivo;
		}
		else
		{
			negativo += num;
			mensajeN = ". Suma de negativos: " + negativo;
		}//suma positivos y suma negativos (1 y 2).
		
		if(num > 0)
		{
			cantP++;
			mensajeCantP = ". Cantidad de positivos: " + cantP;
		}//cant positivos (3).
		else if(num < 0)
		{ 
			cantN++;
			mensajeCantN = ". Cantidad de negativos: " + cantN;
		}//cant negativos (4).
		else
		{
			cantCeros++;
			mensajeCantCeros = ". Cantidad de ceros: " + cantCeros;
		}//cant ceros (5).

		if(num % 2 == 0)
		{
			cantPares++;
			mensajePares = ". Cantidad de números pares: " + cantPares;
		}//cant pares (6).

		promedioP = positivo / cantP;
		mensajePromedioP = ". Promedio de positivos: " + promedioP;
		//promedio positivos (7). 

		promedioN = negativo / cantN;
		mensajePromedioN = ". Promedio de negativos: " + promedioN;
		//promedio negativos (8).

		diferencia = positivo - negativo;
		mensajeDiferencia = ". Diferencia entre negativos y positivos: " + diferencia;
		//diferencia entre negativos y positivos (9).

		respuesta = confirm("¿Desea continuar?.");
	}

	document.write(mensajeP + mensajeN + mensajeCantP + mensajeCantN + mensajeCantCeros + mensajePares + mensajePromedioP + mensajePromedioN + mensajeDiferencia);

}//FIN DE LA FUNCIÓN