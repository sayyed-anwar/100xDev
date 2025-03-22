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
// interface and types
// ======== 1 naive  =====//
function oy(user1) {
    console.log(`Hi ${user1.name}`);
}
let user1 = {
    name: "anwar",
    age: 20,
};
oy(user1);
function yo(user) {
    console.log(`Hi ${user.name}`);
}
let user = {
    name: "anwar",
    age: 20,
};
yo(user);
// extends
class Shape {
    area() {
        console.log("area");
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
}
const rectangle = new Rectangle(5, 10);
rectangle.area(); // Outputs: area
// union between Employee and Manager
let e = {
    name: "anwar",
    age: 20,
};
let m = {
    name: "anwar",
    department: "IT",
};
let tl_u = {
    name: "anwar",
    age: 20,
    // department: "IT",
    //  this can have properties of employee or manager or both
};
// Intersection between Employee and Manager
let tl_i = {
    name: "anwar",
    age: 20,
    department: "IT",
    //  this should have both properties of employee and manager 
};
