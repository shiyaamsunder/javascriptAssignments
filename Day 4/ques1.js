
//Day 4 Assignment 

//Question 1

/*Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3,"buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.*/

fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }

  }
}

//fizzBuzz()

