// 函数类型表达式
function greeter(fn: (a: string) => void) {
	fn('Hello, World')
}

function printToConsole(s: string) {
	console.log(s)
}

greeter(printToConsole)

/*
*   (a: string) => void 这个函数的行参叫做a，是一个字符串类型的值，不返回任何东西
*   a是必须的，如果写成 (string) => void 表示函数的行参叫string，类型为any
* */
// 可以用别名来命名一个函数类型：
type GreetFunction = (a: string) => void

function greeter1(fn: GreetFunction) {}

/*
* JavaScript中，函数除了可以被调用外还可以有属性，但是函数类型声明不允许定义属性。
* 如果我们想使用属性来描述一些可调用的东西，我们可以用object的形式来写一个调用签名
* */
type DescribableFunction = {
	description: string; // 函数的description属性
	(someArg: number): boolean; // 接受的参数类型和返回值的类型, 用:代替函数类型声明里的=>
}
function doSomething(fn: DescribableFunction) {
	console.log(fn.description + 'returned' + fn(6))
}
