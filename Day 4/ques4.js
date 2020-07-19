//Day 4 Assignment

//Question 4 

//Make a calculator

function startCalculator() {

    choice = prompt(`What do you want to do?
1. Addition
2. Subtraction
3. Multiplication
4. Division
5. Square Root
6. Percentage`)

    numbers = () => {
        num1 = Number(prompt('Enter first number'))
        num2 = Number(prompt('Enter second number'))
    }

    add = (num1, num2) => {
        return num1 + num2
    }

    sub = (num1, num2) => {
        return num1 - num2
    }

    multiply = (num1, num2) => {
        return num1 * num2
    }

    divison = (num1, num2) => {
        return num1 / num2
    }

    if (choice != '' || choice != null) {
        if (choice === '1') {
            numbers()
            prompt(`${num1} + ${num2} is ${add(num1, num2)}`)
        } else if (choice === '2') {
            numbers()
            prompt(`${num1} - ${num2} is ${sub(num1, num2)}`)
        } else if (choice === '3') {
            numbers()
            prompt(`${num1} * ${num2} is ${multiply(num1, num2)}`)
        } else if (choice === '4') {
            numbers()
            prompt(`${num1} / ${num2} is ${divison(num1, num2)}`)
        } else if (choice === '5') {
            num = Number(prompt('Enter your number'))
            prompt(`The square root of ${num} is ${Math.sqrt(num)}`)
        } else if (choice === '6') {
            num1 = Number(prompt('Enter the %'))
            num2 = Number(prompt('Enter the total value from which you want to calculate the percentage'))

            percent = (num1 / 100) * num2
            prompt(`The value of ${num1}% of ${num2} is ${percent}`)
        }
    }
}
