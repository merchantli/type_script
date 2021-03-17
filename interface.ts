interface User {
  name: string,
  id: number
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}

const myUser: User = new UserAccount('merchantli', 1)

type StringArray = Array<string>

const message = 'hello!'

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toLocaleDateString()}`)
}
greet('merchantli', new Date())

console.log(12345)

const str = 'hello world'
const str1: string = 'hello world'