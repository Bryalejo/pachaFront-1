# Preguntas:

## ¿Cómo defines una función?

Para definir una función en JavaScript, puedes utilizar 2 formas diferentes:

1. Con la sintaxis function, seguida del nombre que le quieras dar a la función, y entre paréntesis, los argumentos que va a recibir la función. Después, entre llaves, defines las instrucciones que conforman el cuerpo de la función. Aquí te muestro un ejemplo de cómo se define una función que toma dos argumentos:

```js
function suma(a, b) {
	return a + b;
}
```

2. Con la sintaxis de arrow function, que es definir una variable constante con el nombre de la función, que debe ser igual a los argumentos que va a recibir la función entre paréntesis, y esto debe tener una flecha "=>" a su lado para poder abrir las llaves, donde vas a definir las instrucciones que se ejecutara en la función. Aquí te muestro un ejemplo de cómo se define una función que toma dos argumentos:

```js
const suma = (a, b) => {
	return a + b;
};
```

## ¿Hasta cuantos argumentos puedes declarar en una función?

En cuanto a la cantidad de argumentos que puedes declarar en una función en JavaScript, esto no está limitado por el lenguaje en sí mismo. Sin embargo, es importante tener en cuenta que si una función recibe muchos argumentos, puede resultar difícil de entender y de mantener. Además, es posible que haya un límite en la cantidad de argumentos que puedas pasar en una llamada a una función debido a las limitaciones de la memoria disponible en tu ordenador o dispositivo. Por lo general, se recomienda mantener el número de argumentos razonablemente bajo y agruparlos en objetos o arrays si es necesario pasar muchos datos a una función.
