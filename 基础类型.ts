// 布尔值
let isDone: boolean = false

//数字 十进制 十六进制 二进制 八进制
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744

//字符串 可以使用双引号或者单引号 可以使用模版字符串
let firstName: string = "bob"
firstName = 'hanlu'

let name1: string = `Gene`
let age: number = 23

let sentence: string = `Hello, my name is ${name}.
I'll be ${age + 1} years old next month.
`
let sentence1: string = 'Hello, my name is' + name + '.\n\n' + 
"I'll be" + (age + 1) + ' years old next month.'

//数组
let list: number[] = [1, 2, 3]
let list1: Array<number> = [1, 2, 3]

// 元组
let x: [string, number]
x = ['hello', 10]
// x = [10, 'hello'] error
console.log(x[0].substring(1))
// console.log(x[1].substr(1)) 报错下标为1的是数字没有substr方法
// x[3] = 'world' 下标3为undefined 不能赋值为其他类型

// 枚举
enum Color { Red, Green, Blue }
let c: Color = Color.Green

enum Colors { Red = 1, Green, Blue }

// 全部采用手动赋值
enum Colores { Red = 1, Green = 2, Blue = 4 }
let colorName: string = Colores[2]
console.log(colorName) // 显示'Green'

// Any
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false

let list2: any[] = [1, true, 'free']
list[1] = 100
// list[1] = '100' 下标0原来是数字，不能把它重新赋值为字符串

// Boid 表示没有任何类型
function warnUser(): void {
  console.log('This is my warning message')
}
// void类型的变量，只能为它赋值为undefined 和 null
let unusable: void = undefined
// unusable = 123 error

// Null 和 Undefined 在ts里的类型为 undefined 和 null
// 默认情况下，null 和 undefined 是所有类型的子类型
let num = 1
num = undefined
num = null
// num = 'hello' error

// --strictNullChecks 可以阻止这种情况
// let num1: number--strictNullChecks = 1

// Never累心表示永不存在的值的类型 你可以给任意类型的值赋值为never类型的值，因为never类型是他们的子集 但是没有任何类型的值可以赋值给never类型
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
  return error('Something failed')
}

// 返回never的函数必须存在无法到达的终点
function infiniteLoop(): never {
  while (true) {} // 死循环，永远不会返回值
}

// object表示非原始类型，也就是除number, string, boolean, symbol,null,undefined之外的类型
declare function create(o: object | null): void
create({ prop: 0 })
create(null)

// Error
// create(42)
// create('string')
// create(false)
create(undefined)
create(null)

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
// 在实例化类的时候也可以使用接口来定义类型
const user: User = new UserAccount("Murphy", 1)

interface User {
  name: string,
  id: number
}

class UserAccount1 {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}

const user1: User = new UserAccount1('Murphy', 1)
// const user2: User = new UserAccount1('hanlu') 必须提供两个参数

// 可以用interface来限制函数返回值和函数参数的类型
function getAdminUser(): User {
  // return 123 只能返回User类型的值
  return ({
    name: '小明',
    id: 1
  })
}

// 限制入参必须为User类型的对象
function deleteUser(user: User) {

}

// 组合类型
// unions
type MyBool = true | false // 不会被编译成js

type windowState = 'open' | 'closed' | 'minimized'
type LockStates = 'locked' | 'unlocked'
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9

// 函数接受字符串或者数组类型的参数
function getLength(obj: string | string[]) {
  return obj.length
}
// getLength([1, 2, 3]) 参数传入错误，数组里边的值类型都必须为字符串

function wrapInArray(obj: string | string[]) {
  if (typeof obj === 'string') {
    return [obj]
  } else {
    return obj
  }
}

// generics 范型
