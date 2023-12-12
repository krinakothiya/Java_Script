class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}krina`
    }

    set password(value) {
        this._password = value
    }
}

const krina = new User("k@rina.ai", "abc")
console.log(krina.email);