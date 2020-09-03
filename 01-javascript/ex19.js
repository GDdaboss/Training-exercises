let john = {
    name: "John",
    age: 30
}

let jane = {
    name: "Jane",
    age: 20
}

console.log(john.age)
jane.age++
console.log(jane)
john.address = {
    firstline: "Lemon Street",
    city: "Berlin"
}
console.log(john.address.city)

john.spouse = jane
jane.spouse = john

jane.email = [
    "jane23@gmail.com",
    "janedoe@team.telstra.com"
]
console.log(jane.email[1])
jane.email.push("jane238@yahoo.com")
john.celebrateBirthday = () =>{
    this.age++
}
jane.celebrateBirthday = () => {
    this.age++
}
