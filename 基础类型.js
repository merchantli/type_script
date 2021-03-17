// 布尔值
var isDone = false;
//数字 十进制 十六进制 二进制 八进制
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
//字符串 可以使用双引号或者单引号 可以使用模版字符串
var firstName = "bob";
firstName = 'hanlu';
var name1 = "Gene";
var age = 23;
var sentence = "Hello, my name is " + name + ".\nI'll be " + (age + 1) + " years old next month.\n";
var sentence1 = 'Hello, my name is' + name + '.\n\n' +
    "I'll be" + (age + 1) + ' years old next month.';
//数组
var list = [1, 2, 3];
var list1 = [1, 2, 3];
// 元组
var x;
x = ['hello', 10];
// x = [10, 'hello'] error
console.log(x[0].substring(1));
// console.log(x[1].substr(1)) 报错下标为1的是数字没有substr方法
// x[3] = 'world' 下标3为undefined 不能赋值为其他类型
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 2] = "Green";
    Colors[Colors["Blue"] = 3] = "Blue";
})(Colors || (Colors = {}));
// 全部采用手动赋值
var Colores;
(function (Colores) {
    Colores[Colores["Red"] = 1] = "Red";
    Colores[Colores["Green"] = 2] = "Green";
    Colores[Colores["Blue"] = 4] = "Blue";
})(Colores || (Colores = {}));
var colorName = Colores[2];
console.log(colorName); // 显示'Green'
// Any
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
var list2 = [1, true, 'free'];
list[1] = 100;
// list[1] = '100' 下标0原来是数字，不能把它重新赋值为字符串
// Boid 表示没有任何类型
function warnUser() {
    console.log('This is my warning message');
}
// void类型的变量，只能为它赋值为undefined 和 null
var unusable = undefined;
// unusable = 123 error
// Null 和 Undefined 在ts里的类型为 undefined 和 null
// 默认情况下，null 和 undefined 是所有类型的子类型
var num = 1;
num = undefined;
num = null;
// num = 'hello' error
// --strictNullChecks 可以阻止这种情况
// let num1: number--strictNullChecks = 1
// Never累心表示永不存在的值的类型 你可以给任意类型的值赋值为never类型的值，因为never类型是他们的子集 但是没有任何类型的值可以赋值给never类型
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error('Something failed');
}
// 返回never的函数必须存在无法到达的终点
function infiniteLoop() {
    while (true) { } // 死循环，永远不会返回值
}
create({ prop: 0 });
create(null);
// Error
// create(42)
// create('string')
// create(false)
create(undefined);
create(null);
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
// 在实例化类的时候也可以使用接口来定义类型
var user = new UserAccount("Murphy", 1);
var UserAccount1 = /** @class */ (function () {
    function UserAccount1(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount1;
}());
var user1 = new UserAccount1('Murphy', 1);
// const user2: User = new UserAccount1('hanlu') 必须提供两个参数
// 可以用interface来限制函数返回值和函数参数的类型
function getAdminUser() {
    // return 123 只能返回User类型的值
    return ({
        name: '小明',
        id: 1
    });
}
// 限制入参必须为User类型的对象
function deleteUser(user) {
}
