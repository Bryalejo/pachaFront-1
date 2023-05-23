const $inputCalc = document.getElementById('inputCalc');
const $btn0 = document.getElementById('btn0');
const $btn1 = document.getElementById('btn1');
const $btn2 = document.getElementById('btn2');
const $btn3 = document.getElementById('btn3');
const $btn4 = document.getElementById('btn4');
const $btn5 = document.getElementById('btn5');
const $btn6 = document.getElementById('btn6');
const $btn7 = document.getElementById('btn7');
const $btn8 = document.getElementById('btn8');
const $btn9 = document.getElementById('btn9');
const $btnReset = document.getElementById('btnReset');
const $btnMas = document.getElementById('btnMas');
const $btnMenos = document.getElementById('btnMenos');
const $btnMulti = document.getElementById('btnMulti');
const $btnDivi = document.getElementById('btnDivi');
const $btnPow = document.getElementById('btnPow');
const $btnRest = document.getElementById('btnRest');
const $btnResult = document.getElementById('btnResult');
const $textResult = document.getElementById('textResult');
const $btnLeftParen = document.getElementById('btnLeftParen');
const $btnRightParen = document.getElementById('btnRightParen');

const validarExpresion = (event) => {
	const tecla = event.key;
	console.log(tecla);
	const regex = /^[-+*/%\d\s()^]+$/;
	if (tecla === 'Backspace' || tecla === '.') {
		return;
	}
	if (!regex.test(tecla)) {
		event.preventDefault(); // Cancelar la entrada de la tecla
		return false;
	}
};

$btn0.addEventListener('click', () => {
	$inputCalc.value += 0;
});
$btn1.addEventListener('click', () => {
	$inputCalc.value += 1;
});
$btn2.addEventListener('click', () => {
	$inputCalc.value += 2;
});
$btn3.addEventListener('click', () => {
	$inputCalc.value += 3;
});
$btn4.addEventListener('click', () => {
	$inputCalc.value += 4;
});
$btn5.addEventListener('click', () => {
	$inputCalc.value += 5;
});
$btn6.addEventListener('click', () => {
	$inputCalc.value += 6;
});
$btn7.addEventListener('click', () => {
	$inputCalc.value += 7;
});
$btn8.addEventListener('click', () => {
	$inputCalc.value += 8;
});
$btn9.addEventListener('click', () => {
	$inputCalc.value += 9;
});
$btnLeftParen.addEventListener('click', () => {
	$inputCalc.value += '(';
});
$btnRightParen.addEventListener('click', () => {
	$inputCalc.value += ')';
});
$btnMas.addEventListener('click', () => {
	$inputCalc.value += '+';
});
$btnMenos.addEventListener('click', () => {
	$inputCalc.value += '-';
});
$btnMulti.addEventListener('click', () => {
	$inputCalc.value += '*';
});
$btnDivi.addEventListener('click', () => {
	$inputCalc.value += '/';
});
$btnPow.addEventListener('click', () => {
	$inputCalc.value += '**';
});
$btnRest.addEventListener('click', () => {
	$inputCalc.value += '%';
});
$btnReset.addEventListener('click', () => {
	$inputCalc.value = '';
	$textResult.textContent = '';
});
$btnResult.addEventListener('click', () => {
	$textResult.textContent = calc($inputCalc.value);
});

const calc = (expresion) => {
	return eval(expresion);
};
