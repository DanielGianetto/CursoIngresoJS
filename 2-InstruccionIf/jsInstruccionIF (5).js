function mostrar()
{
//tomo la edad  

var edad1;

edad1 = document.getElementById('edad').value;

if(edad1 < 13 || edad1 > 17)
{
	alert("No es adolescente");
}

}//FIN DE LA FUNCIÓN