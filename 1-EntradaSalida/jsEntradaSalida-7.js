/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var a;
	var b;
	var sumar;

	a = document.getElementById('numeroUno').value;
	a = parseInt(a);
	b = document.getElementById('numeroDos').value;
	b = parseInt(b);

	//a = document.getElementById('numeroUno');
	//b = document.getElementById('numeroDos'); <falto el ".value" en ambos>

	sumar = a + b;
	alert("El resultado es " + sumar);

}

function restar()
{
	var a;
	var b;
	var restar;

	a = document.getElementById('numeroUno').value;
	a = parseInt(a);
	b = document.getElementById('numeroDos').value;
	b = parseInt(b);

	restar = a - b;
	
	alert("El resultado es " + restar);
}

function multiplicar()
{ 
	var a;
	var b;
	var multiplicar;

	a = document.getElementById('numeroUno').value;
	a = parseInt(a);
	b = document.getElementById('numeroDos').value;
	b = parseInt(b);

	multiplicar = a * b;

	alert("El resultado es " + multiplicar);
}

function dividir()
{
	var a;
	var b;
	var dividir;

	a = document.getElementById('numeroUno').value;
	a = parseInt(a);
	b = document.getElementById('numeroDos').value;
	b = parseInt(b);

	dividir = a / b;

	alert("El resultado es " + dividir);
}

