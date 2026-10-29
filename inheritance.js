class User{
    constructor(username) {
        this.username = username 
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`)
    }

}

class Teacher extends User {
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`new course was added by ${this.username}`)
    }
}

// TypeError: Class constructor Teacher cannot be invoked without 'new'

const chai = new Teacher("chai" , "chai@gmail.com" , "123")               // 

chai.addCourse()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(chai === masalaChai)
console.log(chai === Teacher)

console.log(chai instanceof User)
console.log(chai instanceof Teacher)
console.log(masalaChai instanceof User)
console.log(masalaChai instanceof Teacher)
