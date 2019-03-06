function mostrar()
{
	var marca;
	var peso;
	var temperatura;

	var temperaturasPares;
	var mensajePar;

	var pesoMaximo;
	var pesoMinimo;
	var mensajeMin;
	var mensajeMax;

	var menosDeCero;
	var mensajeMenosDeCero;

	var sumaDePeso;
	var cantPeso;
	var promedio;
	var mensajePromedio;

	var respuesta;

	temperaturasPares = 0;
	pesoMaximo = 0;
	pesoMinimo = 100;
	menosDeCero = 0;
	sumaDePeso = 0;
	cantPeso = 0;

	while(respuesta != false)
	{
		marca = prompt("Ingrese la marca del producto:");
		console.log(marca);

		peso = prompt("Ingrese el peso del producto:");
		peso = parseInt(peso);
		cantPeso++;
		while(isNaN(peso) == true || peso < 1 || peso > 100)
		{
			peso = prompt("Ingrese el peso de nuevo:");
		}
		console.log(peso);

		temperatura = prompt("Ingrese la temperatura del producto:");
		temperatura = parseInt(temperatura);
		while(isNaN(temperatura) == true || temperatura < -30 || temperatura > 30)
		{
			temperatura = prompt("Ingrese la temperatura de nuevo:");
		}
		console.log(temperatura);

		if(temperatura % 2 == 0)
		{
			temperaturasPares++;
			mensajePar = "Cantidad de temperaturas pares: " + temperaturasPares;
		}// A.

		if(temperatura < 0)
		{
			menosDeCero++;
			mensajeMenosDeCero = ". Cantidad de productos conservados bajo cero: " + menosDeCero;
		}// C.

		sumaDePeso += peso;
		promedio = sumaDePeso / cantPeso;
		mensajePromedio = ". Promedio: " + promedio;
		// D.

		if(peso < pesoMinimo)
		{
			pesoMinimo = peso;
			mensajeMin = ".  Peso minimo" + pesoMinimo;
		}
		else
		{
			if(peso > pesoMaximo)
			{
				pesoMaximo = peso;
				mensajeMax = ". Peso maximo" + pesoMaximo + ". Marca producto más pesado: " + marca;
			}
		}// B y F.

		respuesta = confirm("¿Desea continuar?");
	}

	document.write(mensajePar + mensajeMenosDeCero + mensajePromedio + mensajeMin + mensajeMax);
}