var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var myUser = new UserAccount('merchantli', 1);
var message = 'hello!';
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date.toLocaleDateString());
}
greet('merchantli', new Date());
console.log(12345);