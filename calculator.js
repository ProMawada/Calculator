// function clearResult(){
//     document.getElementById('result').value ="" ;
// }

// function appendToResult(){
//     document.getElementById('result').value += value ;
// }
// function calculateResult (){
//     const expression =document.getElementById('result').value;
//     document.getElementById('result').value = result;
//     try{
//         const result =eval(expression);
//     document.getElementById('result').value = result;
//     }catch(e){
//         document.getElementById('result').value ="Error";
//     }
// }
function appendToResult(value) {
    document.getElementById('result').value += value;
}


function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const expression = document.getElementById('result').value;
    try {
        const result = eval(expression);
        document.getElementById('result').value = result;
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
// function backspace() {
//     calculator.displayValue = calculator.displayValue.slice(0, -1) || '0';
// }

// const keys = document.querySelector('.calculator-keys');
// keys.addEventListener('click', (event) => {
//     const { target } = event;
//     if (!target.matches('button')) {
//         return;
//     }

//     if (target.classList.contains('backspace')) {
//         backspace();
//         updateDisplay();
//         return;
//     }
// });
function backspace() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1) || '0';
}
function convertToPercentage() {
    const display = document.getElementById('result');
    display.value = (parseFloat(display.value) / 100).toString();
}

function calculateResult() {
    const display = document.getElementById('result');
    display.value = eval(display.value.replace('^', '**'));
}