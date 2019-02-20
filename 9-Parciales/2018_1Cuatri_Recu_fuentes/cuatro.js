function mostrar()
{
//Ingresar 4 importes, mostrar el mayor, mostrar el total 
//de la suma de los 4, si supera los $100 hacer un descuento
//del 10%. Si supera los $50 el descuento es del 5%, en el caso
// de ser menor a $50 se le hara un aumento del 15%.

	var importeA;
	var importeB;
	var importeC;
	var importeD;
	var suma;
	var suma1;
	var suma2;
	var descuento1;
	var descuento2;
	var aumento;
	var total;
	var mensaje1;
	var mensaje2;

	importeA = prompt("Ingrese el 1er importe: ");
	importeA = parseInt(importeA);
	importeB = prompt("Ingrese el 2do importe: ");
	importeB = parseInt(importeB);
	importeC = prompt("Ingrese el 3er importe: ");
	importeC = parseInt(importeC);
	importeD = prompt("Ingrese el 4to importe: ");
	importeD = parseInt(importeD);

	suma1 = importeA+importeB; 
	suma1 = parseInt(suma1);
	suma2 = importeD+importeC; 
	suma2 = parseInt(suma2);
	suma = suma1+suma2;
	suma = parseInt(suma);

	if(importeA > importeB && importeA > importeC && importeA > importeD)
	{
		mensaje1 = importeA;
	}
	else
	{
		if(importeB > importeA && importeB > importeC && importeB > importeD)
			{
				mensaje1 = importeB;
			}
	}
	else
	{ 
		if(importeC > importeA && importeC > importeB && importeC > importeD)
		{
			mensaje1 = importeC;
		}
	}
	else
	{
		if(importeD > importeA && importeD > importeB && importeD > importeC)
		{	
			mensaje1 = importeD;
		}
	}
	else
	{
		if(importeA == importeB && importeA == importeC && importeA == importeD)
		{
			mensaje1 = "Son todos iguales";
		}
	}//if(importeA > importeB && importeA > importeC && importeA > importeD)
	alert("El importe mas alto es: " + mensaje1);
	
	if(suma > 100)
	{
		descuento1 = (suma*10)/100;
		descuento1 = parseInt(descuento1);
		total = (suma-descuento1);
		mensaje2 = total;
	}
	else if(suma > 50)
	{
		descuento2 = (suma* 5)/100;
		descuento2 = parseInt(descuento2);
		total = (suma-descuento2);
		mensaje2 = total;
	}
	else
	{
		aumento = (suma*15)/100;
		aumento = parseInt(aumento);
		total = (suma+aumento);
		mensaje2 = total;
	}//if(suma > 50)
	alert("El total es: $" + mensaje2);

}
