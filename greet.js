"use strict";
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}`);
}
greet('merchantli', new Date());
