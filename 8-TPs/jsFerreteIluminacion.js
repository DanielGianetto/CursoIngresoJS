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
	var marca;
	var descuento;
	var cantidad;
	var precioFinal;
	var precioDesc;
	var impuesto;

	precio = 35;
	precioFinal = precio*cantidad;
	precioFinal = parseInt(precioFinal);
	precioDesc = precioFinal-descuento;
	marca = Marca.value;
	cantidad = document.getElementById("Cantidad").value;
	cantidad = parseInt(cantidad);

	if(cantidad >= 6)
	{
		descuento = (precioFinal*50)/100;
		
	}
	if(cantidad == 5)
	{
		if(marca == "ArgentinaLuz")
		{
			descuento = (precioFinal*40)/100;
			
		}
		else
		{
			descuento = (precioFinal*30)/100;
			
		}	//if(marca == "ArgentinaLuz")
	}//if(cantidad == 5)
	else
	{
		if(cantidad == 4)
		{
			if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
			{
				descuento = (precioFinal*25)/100;
				
			}
			else
			{
				descuento = (precioFinal*20)/100;
				
			}	//if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
		}//if(cantidad == 4)
	}
	else
	{
		if(cantidad == 3)
		{
			if(marca == "ArgentinaLuz")
			{
				descuento = (precioFinal*15)/100;
				
				if(marca == "FelipeLamparas")
				{
					escuento = (precioFinal*10)/100;
					precioFinal = precioFinal-descuento;
				}
				else
				{
					escuento = (precioFinal*5)/100;
					precioFinal = precioFinal-descuento;
				}
			}//if(marca == "ArgentinaLuz")
		}//if(cantidad == 3)
	}//if(cantidad == 5)
	console.log(precioFinal);

	if(precioFinal > 120)
	{
		impuesto = (precioFinal*50)/100;
		precioFinal = impuesto + precioFinal;
		alert("Usted pago $" + precioFinal + " de IIBB, siendo X el impuesto que se pagó.");
	}
	precioDescuento.value = precioFinal;
	

		/*if(cantidad == 5 && marca == "ArgentinaLuz")
		{
			precioFinal = precio*cantidad;
			precioFinal = parseInt(precioFinal);
			descuento = (precioFinal*40)/100;
			precioFinal = precioFinal-descuento;
			if(cantidad == 5 && marca != "ArgentinaLuz")
			{		
			precioFinal = precio*cantidad;
			precioFinal = parseInt(precioFinal);
			descuento = (precioFinal*20)/100;
			precioFinal = precioFinal-descuento;
			}		
		}
		else if(cantidad == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas")
		{
			precioFinal = precio*cantidad;
			precioFinal = parseInt(precioFinal);
			descuento = (precioFinal*25)/100;
			precioFinal = precioFinal-descuento;
			if(cantidad == 5 && marca != "ArgentinaLuz" && marca != "FelipeLamparas")
			{		
			precioFinal = precio*cantidad;
			precioFinal = parseInt(precioFinal);
			descuento = (precioFinal*20)/100;
			precioFinal = precioFinal-descuento;
			}		
		}
		else if(cantidad == 3 && marca == "ArgentinaLuz")
		{
			precioFinal = precio*cantidad;
			precioFinal = parseInt(precioFinal);
			descuento = (precioFinal*15)/100;
			precioFinal = precioFinal-descuento;
			if(cantidad == 3 && marca == "FelipeLamparas")
			{
				precioFinal = precio*cantidad;
				precioFinal = parseInt(precioFinal);
				descuento = (precioFinal*10)/100;
				precioFinal = precioFinal-descuento;
			}
			else
			{
				precioFinal = precio*cantidad;
				precioFinal = parseInt(precioFinal);
				descuento = (precioFinal*5)/100;
				precioFinal = precioFinal-descuento;
			}
		}*/
	/*if(precioFinal > 120)
	{
		impuesto = (precioFinal*50)/100;
		precioFinal = impuesto + precioFinal;
		alert("Usted pago $" + precioFinal + " de IIBB, siendo X el impuesto que se pagó.");
	}*/



	



 	/*
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
*/

}
