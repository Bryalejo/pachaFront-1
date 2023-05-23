console.log("sincronizado")

let result =document.getElementById(`result`);
//muestro las operaciones ,ingreso los datos
function appendToResult(value){
result.value += value;
}
function calculateResult(){
    const expression = result.value;
    //separamos los operadores de los numeros
    let numbers = expression.split(/[-+*/^]/);
    let operators = expression.replace(/[0-9.]/g, '').split('');

    let total = parseFloat(numbers[0]);

    for(let i = 0; i < operators.length ; i++){
        const number = parseFloat(numbers[i + 1]);
       const operator = operators[i];

        if (operator === `+`){
            total += number;
        }else if(operator === `-`){
            total -= number;
        }else if(operator === `*`){
            total *= number;    
        }else if(operator === `/`){
            if (number !== 0)  {
                total /= number;
            }   else {
                result.value = `error: division por cero`;
                return;
            }
        }else if(operator === `^`){
            total = Math.pow(total, number); 
               
        }
 }
 result.value = total;
}

//acero el contador
function clearResult() {
    result.value = '';
   }

   function deleteChar() {
     result.value = result.value.slice(0, -1);
   }
