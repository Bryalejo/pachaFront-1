Proceso Ejercicio_5
	precio_zapato <- 800
	Escribir "Ingrese la cantida de zapatos comprados"
	Leer cantidad_zapatos 
	Si cantidad_zapatos > 10 y cantidad_zapatos<20 Entonces
		precio_total<- 800*cantidad_zapatos
		precio_total<- precio_total - (precio_total*0.1)
	SiNo
		Si cantidad_zapatos > 20 y cantidad_zapatos<30 Entonces
			precio_total<- 800*cantidad_zapatos
			precio_total<- precio_total - (precio_total*0.2)
		SiNo
			Si cantidad_zapatos>30 Entonces
				precio_total<- 800*cantidad_zapatos
				precio_total<- precio_total - (precio_total*0.4)
			FinSi
		FinSi
	FinSi
	
	Escribir "El monto total es de ",precio_total
FinProceso
