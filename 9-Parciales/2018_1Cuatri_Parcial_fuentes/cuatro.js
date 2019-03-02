function mostrar()
{

	var numA;
	var numB;
	var suma;
	var resta;
	var mensaje;

	numA = prompt("Ingrese el número A: ");
	numA = parseInt(numA);
	numB = prompt("Ingrese el número B: ");
	numB = parseInt(numB);

	if(numA == numB)
	{
		mensaje = "El número A: " + numA + " y el número B: " + numB + " son iguales.";
	}//si A y B son iguales.
	else
	{ 
		if(numA < numB)
		{
			suma = numA + numB;
			mensaje = "El resultado de la suma de ambos es: " + suma;
			if(suma > 10)
			{
				mensaje = "La suma es " + suma + " y supero el 10.";
			}
		}
		else
		{
			resta = numA - numB;
			mensaje = "El resultado de la resta de ambos es: " + resta;
		}
	}

	alert(mensaje);

}
