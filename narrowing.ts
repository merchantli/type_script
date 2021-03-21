/*
*  @param padding
*   -number the number of spaces prepend to input
*   -string prepend padding to input
* */
function padLeft(padding: number | string, input: string) {
	throw new Error('Not implemented yet!')
}
// we should check the type of padding first
function padLeft1(padding: number | string, input: string) {
	if (typeof padding === 'number') {
		return padding + input
	}
	return new Array(padding + 1).join(' ') + input
}
// typescript根据typeof返回的值来收缩代码的类型，它知道不同分支的值是什么类型的
function someA(str: string | string[] | null) {
	if (typeof str === 'object') { // null也会返回object 应该改成 if (str && typeof str === 'object')
		for (const some of str) {
			console.log(some)
		}
	} else {
		console.log(str)
	}
}

interface Shape {
	kind: 'circle' | 'square',
	radius?: number, // circle时存在
	sideLength?: number // square时存在
}

function getArea(shape: Shape) {
	return Math.PI * shape.radius ** 2 // shape.radius可能为undefined
}

function getArea1(shape: Shape) {
	if (shape.kind === 'circle') {
		return Math.PI * shape.radius ** 2 // ts并不知道radius可kind的关系
	}
}

function getArea2(shape: Shape) {
	if (shape.kind === 'circle') {
		return Math.PI * shape.radius! ** 2 // 加一个断言，告诉ts这里必有radius,但这不是最好的办法
	}
}

interface Circle {
	kind: 'circle',
	radius: number
}
interface Square {
	kind: 'square',
	sideLength: number
}

type Shpes = Circle | Square
