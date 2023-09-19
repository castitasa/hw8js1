let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let resultElement = document.getElementById('result');


let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let degree = document.getElementById('degree');
let root = document.getElementById('root');


plus.onclick = () => {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    const result = num1 + num2;
    resultElement.textContent = result;
}

minus.addEventListener('click', () => {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    const result = num1 - num2;
    resultElement.textContent = result;
})

multiply.addEventListener('click', function () {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    const result = num1 * num2;
    resultElement.textContent = result;
})

divide.addEventListener('click', function () {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    if (num2 !== 0) {
        const result = num1 / num2;
        resultElement.textContent = result;
    } else {
        resultElement.textContent = "не делится на 0";
    }
})

degree.addEventListener('click', function () {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    const result = Math.pow(num1, num2);
    resultElement.textContent = result;
})

root.addEventListener('click', function () {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    const result = Math.pow(num1, 1 / num2);
    resultElement.textContent = result;
})