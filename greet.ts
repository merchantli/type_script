"use strict"
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`)
}
greet('merchantli', new Date())

// 函数输入和输出的类型注释
function someFn(a: string, b: number): number {
	return parseFloat(a) + b
}

const strArr = ['a', 'b', 'c']
strArr.forEach(item => {
	console.log(item.toUpperCase())
})

const composeArr = ['a', 1, true, null]

// 如果要指定一个对象的类型，只需要列出它所有的属性，和属性值的类型
function pointLike(pt: { x: number, y: number }) { // { x: number; y: number } 类型注释里的逗号可以换成分号
		console.log(`x轴的坐标为${pt.x},y轴的坐标为${pt.y}`)
}

// 对象的类型可以指定为一些或所有的属性都是可选的
function someA(obj: { x: number, y?: string }) {
	console.log(obj.x, obj.y)
}
someA({x: 1})
someA({x: 2, y: 'name'})

// typescript允许你在union的每个成员都有效的情况下使用
function someB(id: number | string) {
	// console.log(id.toUpperCase()) // 报错，因为Number没有toUpperCase方法
}
// 解决上述问题的方式是收缩联合类型的范围
function someC(id: number | string) {
	if (typeof id === 'string') { // 把id的类型限定为字符串
		console.log(id.toUpperCase())
	} else { // 把id的值类型限定为数字
		console.log(id.toFixed(2))
	}
}
// 另一种解决的方案是使用像Array.isArray这样的函数
function someD(name: string[] | string) {
	if (Array.isArray(name)) {
		console.log(`Hello ${name.join('and')}`)
	} else {
		console.log(`Hello ${name}`)
	}
}

// 有使用你的union类型的所有成员都有共同之处
function someE(params: string | number[]) {
	console.log(params.slice(1, -1)) // 这时不需要进行类型收缩
}

// 某个联合类型或者对象类型可能需要多次复用，为了让这些类型能够复用，我们需要用别名
type Point = {
	x: number,
	y: number
}
function someF(pt: Point) {
	console.log(pt.x, pt.y)
}

type ID = number | string

// interface 是也是给对象类型命名的方式
interface Person {
	nickname: string,
	age: number,
	hobbies: string[]
}

function introSomeone(person: Person) {
	console.log(`Hello, I'm ${person.nickname}, I'm ${person.age} years old, My hobbies are ${person.hobbies.join(',')}`)
}

// literal
let x: 'hello' = 'hello'
// equal to
const x1 = 'hello'
function someG(param: 'hello' | 'world') {}
function compare(a: number, b: number): -1 | 0 | 1 {
	return a === b ? 0 : a < b ? -1 : 1
}
interface Options {
	width: number
}
function someH(opt: Options | 'auto') {}
let get: 'GET' = 'GET'

// narrowing 收缩
function padLeft(padding: number | string, input: string): string {
	throw new Error('Not implemented yet!') // 还不能执行
}
// padding为number时 表示给 input 预设多少个空格，若为字符串，直接对input和padding相加
function padLeft1(padding: number | string, input: string): string {
	if (typeof padding === 'number') {
		return new Array(padding + 1).join(" ") + input
	}
	return padding + input
}
