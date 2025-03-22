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

// extends
class Shape {
  area() {
    console.log("area");
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
}

const rectangle = new Rectangle(5, 10);

rectangle.area(); // Outputs: area

// difference between syntax

interface UserInterf {
  name: string;
  age: number;
}

interface ManagerInterf {
  department: string;

}

// interface ManagerInterf | UserInterf  //in the interface this is not allowed

type UserType = {
  name: string;
  age: number;
};

// ============== Union  =========== //

type Employee = {
  name: string;
  age: number;
};

type Manager = {
  name: string;
  department: string;
};

// union between Employee and Manager (A union can have either or all the values)
type TeamLeadUnion = Employee | Manager;
// union between Employee and Manager

let e: Employee = {
  name: "anwar",
  age: 20,
};

let m: Manager = {
  name: "anwar",
  department: "IT",
};



let tl_u: TeamLeadUnion = {
  name: "anwar",
  age: 20,
  // department: "IT",
  //  this can have properties of employee or manager or both
};


// Intersection between Employee and Manager (A Intersection should have all the values)
type TeamLeadIntersection = Employee & Manager;
// Intersection between Employee and Manager


let tl_i :TeamLeadIntersection = {
  name: "anwar",
  age: 20,
  department: "IT",
  //  this should have both properties of employee and manager 
}