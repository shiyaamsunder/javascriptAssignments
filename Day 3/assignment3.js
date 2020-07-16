// 90 or above - A Grade
// Above 50 Below 90 - B Grade
// Below 50 - C grade

let marks = prompt('Enter your marks')

//Using Condtionals
if (marks >= 90){
  console.log(`Your marks are ${marks} and grade is A`)
}else if (marks >=50 && marks < 90){
   console.log(`Your marks are ${marks} and grade is B`)
}else{
   console.log(`Your marks are ${marks} and grade is C`)
}

//Using Ternary Operators 
marks >=90 ? console.log(`Your marks are ${marks} and grade is A`) : 
(marks >=50 &&marks <90) ? console.log(`Your marks are ${marks} and grade is B`) :
 console.log(`Your marks are ${marks} and grade is C`)  


    
