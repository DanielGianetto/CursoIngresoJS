function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje; 

switch(mesDelAño)
{
	case "Marzo":
	case"Abril":	
	case "Mayo":
	case "Junio":
		mensaje = "Falta para el invierno.";
		break;
	case "Julio":
	case "Agosto":
		mensaje = "Abrigate que hace frio.";
		break;
	case "Septiembre":	
	case "Octubre":	
	case "Noviembre":	
	case "Diciembre":
	case "Enero":
	case "Febrero":
		mensaje = "Ya pasamos el frio, ahora calor!!!.";
		break;		
}
alert(mensaje);



/*
switch(mesDelAño)
{
	case a:
		mesDelAño = "Marzo";
		mesDelAño = "Abril";
		mesDelAño = "Mayo";
		mesDelAño = "Junio";
		alert("Falta para el invierno.");
		break;
	case b:
		mesDelAño = "Julio";
		mesDelAño = "Agosto";
		alert("Abrigate que hace frio.");
		break;
	case c:
		mesDelAño = "Septiembre";
		mesDelAño = "Octubre";
		mesDelAño = "Noviembre";
		mesDelAño = "Diciembre";
		mesDelAño = "Enero";
		mesDelAño = "Febrero";
		alert("Ya pasamos el frio, ahora calor!!!.");
		break;
}*/





//alert (mesDelAño);




}//FIN DE LA FUNCIÓN