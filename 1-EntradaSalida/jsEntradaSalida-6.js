/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var a;
	var b;
	var suma;

	a = document.getElementById('numeroUno').value;  
	b = document.getElementById('numeroDos').value;  //<este funciona!!>

	//a = numeroUno.value;  
	//b = numeroDos.value;  <este también!!>

	//1a = parseInt(numeroUno); <no>
	//1b = parseInt(numeroDos); <no>
	
	//2parseInt(numeroUno) = a; <no>
	//2parseInt(numeroDos) = b; <no>

	//suma = a + b; <no>

	suma = parseInt(a) + parseInt(b);

	alert("El resultado es: " + suma);

}

