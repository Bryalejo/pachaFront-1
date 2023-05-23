Proceso Ejercicio_17
	Escribir "Ingrese la hora:"
    Leer hora
    Escribir "Ingrese los minutos:"
    Leer minutos
    Escribir "Ingrese los segundos:"
    Leer segundos
    
    Si hora < 0 o hora > 23 Entonces
        Escribir "Hora inválida"
    Sino
        Si minutos < 0 o minutos > 59 Entonces
            Escribir "Minutos inválidos"
        Sino
            Si segundos < 0 o segundos > 59 Entonces
                Escribir "Segundos inválidos"
            Sino
                segundos <- segundos + 1
                Si segundos = 60 Entonces
                    segundos <- 0
                    minutos <- minutos + 1
                    Si minutos = 60 Entonces
                        minutos <- 0
                        hora <- hora + 1
                        Si hora = 24 Entonces
                            hora <- 0
                        Fin Si
                    Fin Si
                Fin Si
				Escribir "La hora dentro de un segundo es: ", hora, ":", minutos, ":", segundos
            Fin Si
        Fin Si
    Fin Si
FinProceso
