class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }

}

// extendes use like prototype 
class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const name = new Teacher("teacher", "chai@teacher.com", "123")

name.addCourse()

const student = new User("student")
student.logMe()

console.log(name instanceof User);    //instaceof to check user made from name 