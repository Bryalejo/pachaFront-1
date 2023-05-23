Proceso Ejercicio_6
	Escribir "Ingresa las horas trabajadas mensualmente : " 
	Leer horas_trabajadas
	Si horas_trabajadas <= 10 Entonces
		pago = horas_trabajadas*20
	SiNo
		Si horas_trabajadas > 40 Entonces
			pago = horas_trabajadas * 25
		FinSi
	FinSi
	
	Escribir "Trabajo ",horas_trabajadas," en el mes"
	Escribir " y por esa cantidad se le pagara ",pago
FinProceso
