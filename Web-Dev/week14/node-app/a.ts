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

function w(j:()=> void) {
  setTimeout(j, 1000);
}

w(function(){
    console.log("hi man");
});
