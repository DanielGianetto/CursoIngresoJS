/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos e informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/

function CalcularPrecio () 
{
 	
 	var precio;
 	var cantidad;
 	var marcaLampara;
 	var descuento;
 	var aumentoIIBB;
 	var precioFinal;

 	//marcaLampara = document.getElementById('Marca');
 	//cantidad = document.getElementById('Cantidad');
	//marcaLampara = document.getElementByClassName('Marca');

 	marcaLampara = Marca.value;
 	cantidad = Cantidad.value;
 	cantidad = parseInt(cantidad);
	precio = 35;
	precio = precio * cantidad;

 	if (cantidad >= 6)
 	{
 		descuento = (precio * 50)/100;
 		precioFinal = (precio - descuento);
 	}
 	else
 	{
	 	if (cantidad == 5 && marcaLampara == "ArgentinaLuz")
	 	{
	 		descuento = (precio * 40)/100;
	 		precioFinal = (precio - descuento);
	 	}
	 	else
		{
		 	if (marcaLampara =! "ArgentinaLuz")
		 	{
		 		descuento = (precio * 30)/100;
		 		precioFinal = (precio - descuento);	
		 	}
		 	else
		 	{
		 		if (cantidad == 4 && marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")
		 		{
			 		descuento = (precio * 25)/100;
			 		precioFinal = (precio - descuento);
		 		}
		 		else
		 		{
			 		if ((marcaLampara =! "ArgentinaLuz") && (marcaLampara =! "FelipeLamparas"))
					{
						descuento = (precio * 20)/100;
						precioFinal = (precio - descuento);
					}
					else
					{
						if (cantidad == 3 && marcaLampara == "ArgentinaLuz")
						{
							descuento = (precio * 15)/100;
							precioFinal = (precio - descuento);
						}
						else
						{
							if (marcaLampara == "FelipeLamparas")
							{
								descuento = (precio * 10)/100;
								precioFinal = (precio - descuento);
							}
							else
							{
								descuento = (precio * 5)/100;
								precioFinal = (precio - descuento);
							}
		 				}
					}	
		 		}
		 	}				
	 	}  
	}	
	if(precioFinal > 120)
	{
		aumentoIIBB = (precioFinal * 10)/100;
		aumentoIIBB = parseInt(aumentoIIBB);
		precioFinal = precioFinal+aumentoIIBB;
		alert("Usted pago $" + aumentoIIBB + " de IIBB.");
	}

precioDescuento.value = precioFinal;

}
