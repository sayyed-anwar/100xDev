"use strict";
//interface and type
//  create two types User and Admin 
// Create a function that takes either user or admin as arguments , and returns a string like 'Welcome, [name]'
function greetNew(u) {
    return console.log(`Welcome, ${u.name}`);
}
let newUser = {
    name: 'John Doe',
    age: 30,
};
let result = greetNew(newUser);
