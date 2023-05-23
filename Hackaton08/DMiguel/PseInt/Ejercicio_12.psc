Proceso Ejercicio_12
	Dimension  numero[2]
	Para i <- 1 Hasta 2 Con Paso 1 Hacer
		Escribir " Ingrese el numero ( ",i, " ) : "
		Leer numero[i]
	Fin Para
	
	Para i <- 1 Hasta 2 Con Paso 1 Hacer
		Para j <- i+1 Hasta 2 Con Paso 1 Hacer
			Si numero[i] > numero[j] Entonces
				temp <- numero[i]
				numero[i] <- numero[j]
				numero[j] <- temp
			FinSi
		FinPara
	FinPara
	
	Escribir "El numero mayor ingresado es ",numero[2]
FinProceso
