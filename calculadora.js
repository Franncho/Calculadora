let result = document.getElementById('result');

function inputValue(input) {
    result.value += input;
}

function clearResult() {
    result.value = '';
}

function deleteNumber() {
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}