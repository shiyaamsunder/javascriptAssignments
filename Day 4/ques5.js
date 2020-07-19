//Day 4 Assignment

//Question 5

/*You are managing a sales department for your company, you want to reward your employees based on
the sales made by them during the year.
The criteria is as follows:
1. Sales from 0-5000 : 2%
2. Sales from 5001 - 10000 : 5%
3. Sales from 10001 - 20000 : 7%
4. Above 20000 - 10%
Then log the total commission earned by him.*/

function commission() {
    let sales = prompt('Please enter your sales made during this year')

    let commissionOne = (sales * 0.02)
    let commissionTwo = (sales * 0.05)
    let commissionThree = (sales * 0.07)
    let commissionFour = (sales * 0.1)

    sales <= 5000 ? alert(`Your total commission is ${commissionOne}`) :
        sales > 5000 <= 10000 ? alert(`Your total commission is ${commissionTwo}`) :
            sales > 100001 <= 20000 ? alert(`Your total commission is ${commissionThree}`) :
                alert(`Your total commission is ${commissionFour}`)
}



