
// -------------------- Seleccion elementos del DOM --------------------

const numero0 = document.getElementById('numero0');
const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const numero3 = document.getElementById('numero3');
const numero4 = document.getElementById('numero4');
const numero5 = document.getElementById('numero5');
const numero6 = document.getElementById('numero6');
const numero7 = document.getElementById('numero7');
const numero8 = document.getElementById('numero8');
const numero9 = document.getElementById('numero9');

const decimal = document.getElementById('decimal');

const suma = document.getElementById('suma');
const resta = document.getElementById('resta');
const multiplicacion = document.getElementById('multiplicacion');
const division = document.getElementById('division');
const potencia = document.getElementById('potencia');
const resto = document.getElementById('resto');
const igual = document.getElementById('igual');

const parentAbierto = document.getElementById('parentAbierto');
const parentCerrado = document.getElementById('parentCerrado');

const resetear = document.getElementById('resetear');
const resultado = document.getElementById('resultado');



// -------------------- Eventos click para los botones --------------------

numero0.addEventListener("click", () => {
    resultado.value += 0;
});

numero1.addEventListener("click", () => {
    resultado.value += 1;
});

numero2.addEventListener("click", () => {
    resultado.value += 2;
});

numero3.addEventListener("click", () => {
    resultado.value += 3;
});

numero4.addEventListener("click", () => {
    resultado.value += 4;
});

numero5.addEventListener("click", () => {
    resultado.value += 5;
});

numero6.addEventListener("click", () => {
    resultado.value += 6;
});

numero7.addEventListener("click", () => {
    resultado.value += 7;
});

numero8.addEventListener("click", () => {
    resultado.value += 8;
});

numero9.addEventListener("click", () => {
    resultado.value += 9;
});


decimal.addEventListener("click", () => {
    resultado.value += ".";
});


suma.addEventListener("click", () => {
    resultado.value += "+";
});

resta.addEventListener("click", () => {
    resultado.value += "-";
});

multiplicacion.addEventListener("click", () => {
    resultado.value += "*";
});

division.addEventListener("click", () => {
    resultado.value += "/";
});

potencia.addEventListener("click", () => {
    resultado.value += "^";
});

resto.addEventListener("click", () => {
    resultado.value += "%";
});


parentAbierto.addEventListener("click", () => {
    resultado.value += "(";
});

parentCerrado.addEventListener("click", () => {
    resultado.value += ")";
});



// -------------------- Denegar la opcion de pegar texto en el input --------------------

resultado.addEventListener("paste", (event) => {
    event.preventDefault();
});



// -------------------- Calcular operaciones --------------------

function calcular() {
    if (resultado.value != "") {
        try {
            let operacion = resultado.value.replace(/\^/g, "**");
            resultado.value = Function(`"use strict"; return (${operacion});`)();
            console.log(resultado.value);
        }
        catch {
            resultado.value = "Error";
            $('.btnOperador').removeClass('btnOperador--active');
            $('.btnOperador').addClass('btnOperador--disabled');
            $('.btnNumber').removeClass('btnNumber--active');
            $('.btnNumber').addClass('btnNumber--disabled');
            resetear.classList.remove('btnOperador--disabled');
            resetear.classList.add('btnOperador--active');
        };
    };
};


igual.addEventListener("click", () => {
    calcular();
});


resultado.addEventListener("keydown", (event) => {
    const teclaPresionada = event.key;
    if (teclaPresionada === "Backspace" || teclaPresionada === "Delete" || teclaPresionada === "Shift" || teclaPresionada === "ArrowLeft" || teclaPresionada === "ArrowRight" || teclaPresionada === "Tab") {
        return;
    };

    const caracteresPermitidos = /[0-9+\-*\/%().]/;
    if (!caracteresPermitidos.test(teclaPresionada)) {
        event.preventDefault();
    };

    if (teclaPresionada === "Enter") {
        calcular()
    };
});


resetear.addEventListener("click", () => {
    $('.btnOperador').removeClass('btnOperador--disabled');
    $('.btnOperador').addClass('btnOperador--active');
    $('.btnNumber').removeClass('btnNumber--disabled');
    $('.btnNumber').addClass('btnNumber--active');
});
