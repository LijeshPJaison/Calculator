let currentExpression = '';

function appendValue(value) {
    currentExpression += value;
    document.getElementById('result').value = currentExpression;
}

function appendOperator(operator) {
    if (currentExpression !== '') {
        const lastCharacter = currentExpression[currentExpression.length - 1];
        if (lastCharacter !== '+' && lastCharacter !== '-' && lastCharacter !== '*' && lastCharacter !== '/') {
            appendValue(operator);
        } else {
            currentExpression = currentExpression.slice(0, -1) + operator;
            document.getElementById('result').value = currentExpression;
        }
    }
}

function calculate() {
    const result = eval(currentExpression);
    document.getElementById('result').value = result;
    currentExpression = '';
}

function clearResult() {
    currentExpression = '';
    document.getElementById('result').value = '';
}