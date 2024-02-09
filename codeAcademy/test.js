class Person {
    make: "honda"
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    greeting() {
    return `Hi, I am ${this.firstName} ${this.lastName}.`;
    }
    tst(){
        console.log("Person class")
    }
}

const obj = new Person("mohamed", "habti")
console.log(obj.firstName)
console.log(obj.greeting())
obj.tst()