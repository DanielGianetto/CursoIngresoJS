function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	//var numeroRandom;

	//numeroRandom = Random(1,10);

	/*if(document.getElementByClass('MiBotonUTNnav').onclick = mostrar(){numeroRandom})
	{
		alert("El numero que se generó es: " + numeroRandom);
	}*/
//------
	/*var numeroRandom;

	numeroRandom = Random.range(1,10);

	document.getElementByClass("MiBotonUTNnav").onclick = mostrar(numeroRandom);
	alert("El numero que se generó es: " + numeroRandom);*/

	//var randomNum;
	//var button;

	//randomNum = Random.range(1,10);

	/*if(button)
	{
		alert(randomNum);
	}*/
//------

var numero;
var pressButton;

//numero = (int) (Math.random() * 10) + 1;
pressButton = document.getElementsByClassName("MiBotonUTNnav");
numero = Math.floor(Math.random() * 10) + 1; //Si se pone "(Math.random() * 10) + 1" dara como resultado un numero aleatorio 
											 //con decimales,para que sea entero hay que poner "Math.floor(Math.random() * 10) + 1"
if(pressButton)
{
	alert(numero);
}


	



}//FIN DE LA FUNCIÓN