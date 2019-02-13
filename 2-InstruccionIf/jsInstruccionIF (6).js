function mostrar()
{
//tomo la edad  

var edad1;

edad1 = document.getElementById('edad').value;

if(edad1 >= 18)
{
	alert("Mayor de edad");
}
else
{
	if(edad1 < 13)	
	{
		alert("Es un niño");
	}
	else
	{
		alert("Es adolescente");
	}
}

/*if(edad1 >= 18)
{
	alert("Es mayor de edad");
}
else if(edad1 >= 13 && edad1 <= 17)
{
	alert("Es adolescente");
}
else(edad1 < 13)
{
	alert("Es un niño");
}*/


}//FIN DE LA FUNCIÓN