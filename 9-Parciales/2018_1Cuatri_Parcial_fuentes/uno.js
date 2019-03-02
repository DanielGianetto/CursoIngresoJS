
function mostrar()
{

	var anchoRectangulo;
	var largoRectangulo;
	var perimetro;

	anchoRectangulo = prompt("Ingrese el ancho: ");
	anchoRectangulo = parseInt(anchoRectangulo);
	largoRectangulo = prompt("Ingrese el largo: ");
	largoRectangulo = parseInt(largoRectangulo);

	perimetro = (anchoRectangulo + largoRectangulo) * 2;
	alert("El perimetro es: " + perimetro + "cm.");
	
}
