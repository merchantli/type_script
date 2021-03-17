// function greeter(person: string) {
//   return 'Hello,' + person
// }

// const user = [1, 2, 3]

// document.body.innerHTML = greeter()

// interface Person {
//   firstName: string,
//   lastName: string
// }

// function greeter(person: Person) {
//   return 'Hello, ' + person.firstName + ' ' + person.lastName
// }

// const user = {
//   firstName: 'Jane',
//   lastName: 'User'
// } 

// document.body.innerHTML = greeter(user)

class Student {
  fullName: string,
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
  }
}

interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

const user = new Student('Jane', 'M.', 'User')

document.body.innerHTML = greeter(user)