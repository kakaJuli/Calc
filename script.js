let numbers = document.querySelectorAll('.btn');
let operations = document.querySelectorAll('.operation');
let dot = document.getElementById('dot');
let cl = document.getElementById('cl');
let resultBtn = document.getElementById('ravno');
let display = document.getElementById('display');
let MemoryCurrentNumber = 0; //текущее число
let MemoryNewNumber = false;
let MemoryPandingOperation = ''; // то что ожидается


for (let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    number.addEventListener('click', function (e) {
        numberPress(e.target.textContent);
    });

}

for (let i = 0; i < operations.length; i++){
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function(e){
        
        operation(e.target.textContent);
    });

}

dot.addEventListener('click', drop);

cl.addEventListener('click', clear);

resultBtn.addEventListener('click', result);




function numberPress (number) {
    if(display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
    display.value = number;
 
};

function operation (op) {

    localOperationMemoru = display.value; // сохранит введенные значения

    if (MemoryNewNumber) {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (op == '+') {
            MemoryCurrentNumber += display.value;
        } else if (op === '-') {
            MemoryCurrentNumber -= display.value;
        } else if (op === '*') {
            MemoryCurrentNumber *= display.value;
        } else if (op === '/') {
            MemoryCurrentNumber /= display.value;
        } else if (op === '%') {
            MemoryCurrentNumber %= display.value;
        } else {
            MemoryCurrentNumber = localOperationMemoru;
        }

        display.value = MemoryCurrentNumber;
    };
    console.log('клик по операции' + symbol + '');
};

function clear () {
    
};

function result () {

};

function drop () {

};

// 59.42