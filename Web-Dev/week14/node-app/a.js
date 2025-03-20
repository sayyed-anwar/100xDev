"use strict";
// Problem 1
const greet = (name) => {
    console.log(`hi ${name}`);
};
greet("anwar");
// Problem 2
function a(one) {
    return one;
}
function b(two) {
    return two;
}
function c(one, two) {
    console.log(one + two);
}
c(a(5), b(5));
// Problem 3
function isLeagal(age) {
    if (age < 18) {
        return false;
    }
    else {
        return true;
    }
}
console.log(isLeagal(19));
// Problem 4
function w(j) {
    setTimeout(j, 1000);
}
w(function () {
    console.log("hi man");
});
