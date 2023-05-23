Proceso Ejercicio_9
	Escribir "Ingrese cuanto gana : "
	Leer gana
	Si gana> 2000 Entonces
		gana = gana + (gana*0.05)
	SiNo
		gana = gana + (gana*0.1)
	FinSi
	Escribir "Su aumento total es de : ",gana
FinProceso
