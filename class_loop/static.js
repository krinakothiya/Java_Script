class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const krina = new User("krina")
// console.log(hitesh.createId())    (it`s give an error becouse id was static than can not change)


// extendes use like prototype 
class apple extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new apple("iphone", "i@phone.com")
iphone.logMe()