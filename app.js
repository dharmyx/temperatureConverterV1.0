const celsiusDisplay = document.querySelector('.celsius1 > input');
const kelvinDisplay = document.querySelector('.kelvin1 > input');
const fahrenheitDisplay = document.querySelector('.fahrenheit1 > input');

function fixedNum(number) {
    return Math.round(number * 100)/100;
}

function celsius_Kelvin_Fahrenheit() {
    const celsiusTemp = parseFloat(celsiusDisplay.value);
    const kelvinTemp = celsiusTemp + 273.15;
    const fahrenheitTemp = (celsiusTemp * (9/5)) + 32;

    kelvinDisplay.value = fixedNum(kelvinTemp);
    fahrenheitDisplay.value = fixedNum(fahrenheitTemp);
}

function kelvin_Fahrenheit_Celsius() {
    const kelvinTemp = parseFloat(kelvinDisplay.value);
    const fahrenheitTemp = (kelvinTemp - 273.15) * (9/5) + 32;
    const celsiusTemp = kelvinTemp - 273.15;

    fahrenheitDisplay.value = fixedNum(fahrenheitTemp);
    celsiusDisplay.value = fixedNum(celsiusTemp);
}

function fahrenheit_Kelvin_Celsius() {
    const fahrenheitTemp = parseFloat(fahrenheitDisplay.value);
    const kelvinTemp = (fahrenheitTemp - 32) * (5/9) + 273.15;
    const celsiusTemp = (fahrenheitTemp - 32) * (5/9);

    kelvinDisplay.value = fixedNum(kelvinTemp);
    celsiusDisplay.value = fixedNum(celsiusTemp);
}


celsiusDisplay.addEventListener('input', celsius_Kelvin_Fahrenheit);
kelvinDisplay.addEventListener('input', kelvin_Fahrenheit_Celsius);
fahrenheitDisplay.addEventListener('input', fahrenheit_Kelvin_Celsius);