function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLastChar() {
    var display = document.getElementById('result');
    display.value = display.value.toString().slice(0, -1);
}

function calculateResult() {
    var display = document.getElementById('result');
        display.value = eval(display.value);
}
