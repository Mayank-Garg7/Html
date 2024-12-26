let currentInput = '';
let screen = document.getElementById('screen');

function appendToScreen(value) {
    currentInput += value;
    screen.innerText = currentInput;
}

function clearScreen() {
    currentInput = '';
    screen.innerText = '0';
}

function calculate() {
    try {
        const result = eval(currentInput);
        screen.innerText = result;
        currentInput = result.toString();
    } catch (error) {
        screen.innerText = 'Error';
        currentInput = '';
    }
}
