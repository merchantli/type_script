//any 当一个值被标记为any类型时，可以随意获取他的属性，调用它，或者对它进行任何其他语法合规的操作
let obj: any = { x: 0 }
obj.foo()
obj()
obj.bar = 100
obj = 'hello'
const n: number = obj

let myName = 'merchantli'