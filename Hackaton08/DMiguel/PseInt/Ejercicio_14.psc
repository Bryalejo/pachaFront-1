Proceso Ejerciccio_14
	primo = 0
	Escribir "Ingrese un Numero del ( 1-10 )"
	Leer numero
	Para i<-1 Hasta numero Hacer
		aux = numero-i
		Si aux == 1 Entonces
			i = numero
			primo = 1
		SiNo
			Si (numero mod aux) == 0 Entonces
				primo = 0
				i = numero
			FinSi
		FinSi
		Escribir numero mod aux
	FinPara
	Si primo == 1 Entonces
		Escribir "el numero ",numero," es primo"
	SiNo
		Escribir "el numero ",numero," no es primo"
	FinSi
FinProceso
