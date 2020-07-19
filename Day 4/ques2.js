// Day 4 Assignment

//Question 2

//Destructure the following object 

const student = {
    name: 'Helsinki',
    age: 24,
    projects: {
        diceGame: 'Two player dice game using JavaScript'
    }
}

const { name, age, projects: { diceGame: project } } = student

//console.log(name)
//console.log(age)
//console.log(project)

//Writing an function to destructure the object and log it to console in a readable manner.

function showStudentDetails(name, age, project) {
    deatils = `Student name is ${name}. Age is ${age}. The current project is ${project}.`
    console.log(deatils)
}

//showStudentDetails(name, age, project)
