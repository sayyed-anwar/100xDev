// Problem 1
const greet = (name: string) => {
  console.log(`hi ${name}`);
};

greet("anwar");

// Problem 2
function a(one: number) {
  return one;
}

function b(two: number) {
  return two;
}

function c(one: number, two: number) {
  console.log(one + two);
}

c(a(5), b(5));

// Problem 3

function isLeagal(age: number): boolean {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}

console.log(isLeagal(19));

// Problem 4

function w(j: () => void) {
  setTimeout(j, 1000);
}

w(function () {
  console.log("hi man");
});

// interface and types

// ======== 1 naive  =====//

function oy(user1: { name: string; age: number }) {
  console.log(`Hi ${user1.name}`);
}

let user1: { name: string; age: number } = {
  name: "anwar",
  age: 20,
};
oy(user1);

// ======== 2 Good======//

interface userTypes {
  name: string;
  age: number;
}

function yo(user: userTypes) {
  console.log(`Hi ${user.name}`);
}

let user: userTypes = {
  name: "anwar",
  age: 20,
};

yo(user);
