function mostrar()
{
	var numA;
	var numB;
	var mensaje;
	var resta;
	var suma;

	numA = prompt("Ingrese el número A:");
	numA = parseInt(numA);
	numB = prompt("Ingrese el número A:");
	numB = parseInt(numB);

	if(numA == numB)
	{
		mensaje = "Ambos numeros son iguales, número A: " + numA + " número B: " + numB;
	}
	else
	{
		if(numA > numB)
		{
			resta = numA - numB;
			mensaje = "El resultado de la resta es: " + resta;
		}
		else
		{
			suma = numA + numB;
			mensaje = "El resultado de la suma es: " + suma;
			if(suma > 10)
			{
				mensaje = "La suma es " + suma + " y supero el 10";
			}
		}
	}

	alert(mensaje);
}
