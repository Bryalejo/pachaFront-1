Proceso Ejercicio_7
	Escribir "Ingrese el tipo de menbresia que tiene (A,B;C): "
	Leer tipo_menbresia
	precio_helado <- 7
	Si tipo_menbresia == "A" Entonces
		precio_total<- precio_helado - (precio_helado*0.1)
	SiNo
		Si tipo_menbresia == "B" Entonces
			precio_total<- precio_helado - (precio_helado*0.15)
		SiNo
			Si tipo_menbresia == "C" Entonces
				precio_total <- precio_helado - (precio_helado*0.2)
			SiNo
				Escribir "Menbresia ingresada, es incorrecta"
			FinSi
		FinSi
	FinSi
	
	Si tipo_menbresia == "A" o tipo_menbresia == "B" o tipo_menbresia == "C" Entonces
		Escribir "Su tipo de menbresi es ",tipo_menbresia
		Escribir "Entonces paga, ",precio_total," soles"
	FinSi
FinProceso
