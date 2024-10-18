// Functions
function addition(x, y) {
    return x + y;
}

function subtraction(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    if (y === 0) {
        return 'Error: Division by zero is not allowed!';
    }
    return x / y;
}

while (true) {
    // Inputs Validation
    let operation = parseInt(prompt('Choose your operation first:\n 1.)Addition\n 2.)Subtraction\n 3.) Multiplication\n 4.) Division '));
    let num1 = parseFloat(prompt('Enter your first number: '));
    let num2 = parseFloat(prompt('Enter your second number: '));
    // Calculate
    let result;
    if (operation === 1) {
        result = addition(num1, num2);
        alert(`${num1} + ${num2} = ${result}`);
    } else if (operation === 2) {
        result = subtraction(num1, num2);
        alert(`${num1} - ${num2} = ${result}`);
    } else if (operation === 3) {
        result = multiplication(num1, num2);
        alert(`${num1} * ${num2} = ${result}`);
    } else if (operation === 4) {
        if (num2 === 0) {
            alert('Error: Division by zero is not allowed!');
        } else {
            result = division(num1, num2);
            alert(`${num1} / ${num2} = ${result}`);
        }
    } else {
        alert('Sorry, Invalid Operation! Please try again....');
    }
}