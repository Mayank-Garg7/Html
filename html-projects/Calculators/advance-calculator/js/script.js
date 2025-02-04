function clearDisplay() {
    document.getElementById("display").value = "";
}

function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculateResult() {
    const expression = document.getElementById("display").value;
    try {
        const result = eval(expression);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function calculateSqrt() {
    const value = parseFloat(document.getElementById("display").value);
    if (!isNaN(value)) {
        document.getElementById("display").value = Math.sqrt(value);
    } else {
        document.getElementById("display").value = "Error";
    }
}

function calculateSin() {
    const value = parseFloat(document.getElementById("display").value);
    if (!isNaN(value)) {
        document.getElementById("display").value = Math.sin(value * (Math.PI / 180));
    } else {
        document.getElementById("display").value = "Error";
    }
}

function calculateCos() {
    const value = parseFloat(document.getElementById("display").value);
    if (!isNaN(value)) {
        document.getElementById("display").value = Math.cos(value * (Math.PI / 180));
    } else {
        document.getElementById("display").value = "Error";
    }
}

function calculateTan() {
    const value = parseFloat(document.getElementById("display").value);
    if (!isNaN(value)) {
        document.getElementById("display").value = Math.tan(value * (Math.PI / 180));
    } else {
        document.getElementById("display").value = "Error";
    }
}