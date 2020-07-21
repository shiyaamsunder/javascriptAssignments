class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0;
        this.courses = [];
    }

    login() {
        console.log(`${this.name} has logged in`)
    }

    logout() {
        console.log(`${this.name} has logged out`)
    }
}

class Moderator extends User {
    addCoins(User) {
        User.coins++
        console.log(`${User.name} have ${User.coins} coins.`)
        return User.coins
    }
    removeCoins(User) {
        if (User.coins === 0) {
            alert('There are no more coins')
        } else {
            User.coins--
            console.log(`${User.name} have ${User.coins} coins.`)
            return User.coins

        }
    }
}

class Admin extends Moderator {
    addCourse(User, courseName) {
        User.courses.push(courseName)
    }
    deleteCourse(User, courseName) {
        const index = User.courses.indexOf(courseName)
        if (index > -1) {
            User.courses.splice(index, 1)
        }
    }
}


let user1 = new User('Saitama', 25, 'saitama@heroes.com')
let user2 = new User('Genos', 19, 'genos@heros.com')

// console.log(user1)
// console.log(user2)
let users = [user1, user2]

let mod1 = new Moderator('Metal Bat', 30, 'metalbat@heroes.com')

let admin = new Admin('Admin', 20, 'admin@heros.com')

console.log('Question 2 Results:')


console.log(user1)
console.log(user2)

console.log(mod1)

mod1.addCoins(user1)
mod1.addCoins(user1)
mod1.addCoins(user1)
mod1.removeCoins(user1)

console.log(user1.coins)

console.log(admin)

admin.addCourse(user1, 'JavaScript')
admin.addCourse(user1, 'Python')
admin.addCourse(user2, 'Blockchain')

console.log(user1.courses)
console.log(user2.courses)

admin.deleteCourse(user1, 'Python')
console.log(user1.courses)

