//Day 4 Assignment

//Question 7

//Write the code which outputs prime numbers in the interval from 2 to n.


function showPrime(n) {
    outerloop:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue outerloop
        }
        console.log(i)
    }
}

//showPrime(10)