Proceso ejercicio38
	Escribir "escribe un numero"
	leer num
	suma=0
	para i=1 hasta num/2 Hacer
		si num % i = 0 Entonces
			suma=suma+i
		FinSi
	FinPara
	
	si suma = num Entonces
		
		Escribir  num ", es un numero perfecto"
	SiNo
		Escribir num " , no es un numero perfecto"
	FinSi
FinProceso
