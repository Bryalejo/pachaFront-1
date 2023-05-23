Proceso Ejercicio_8
	Dimension notas[3]
	Para i<-1 Hasta 3 Hacer
		Escribir "Ingrese su nota ( ",i," )"
		Leer notas[i]
	FinPara
	promedio <- (notas[1] + notas[2] +notas[3])/3
	Si promedio > 10.5 Entonces
		Escribir "El promedio de su nota es ",promedio,", usted aprovo"
	SiNo
		Escribir "El promedio de su nota es ",promedio," usted desaprovo"
	FinSi
FinProceso
