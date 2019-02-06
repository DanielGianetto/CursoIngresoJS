/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var a;
	var b;
	var suma;

	a = document.getElementById('numeroUno').value;
	a = parseInt(a);  
	b = document.getElementById('numeroDos').value;
	b = parseInt(b);

	suma = a + b;

	alert("El resultado es: " + suma);

	//a = numeroUno.value;  
	//b = numeroDos.value;  <este también!!>

	//a = parseInt(numeroUno); <no>
	//b = parseInt(numeroDos); <no>
	
	//parseInt(numeroUno) = a; <no>
	//parseInt(numeroDos) = b; <no>

	//suma = a + b; <no>

	//suma = parseInt(a) + parseInt(b); <no>

}

