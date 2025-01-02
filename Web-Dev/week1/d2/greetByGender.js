const user = {
  name: "Anwar",
  age: 23,
  gender: "Male",
};

function greetByGender(user) {
  if (user.gender === "Male") {
    if (user.age >= 18) {
      return `Hello, Mr. ${user.name}! your age is ${user.age} so you can vote`;
    } else {
      return `Hello, Ms. ${user.name}! your age is ${user.age} so you cannot vote yet`;
    }
  } else if (user.gender === "Female") {
    if (user.age >= 18) {
      return `Hello, Mrs. ${user.name}! your age is ${user.age} so you can vote`;
    } else {
      return `Hello, Ms. ${user.name}! your age is ${user.age} so you cannot vote yet`;
    }
  } else {
    return "Invalid gender. Please enter 'Male' or 'Female'";
  }
}

let output = greetByGender(user);

console.log(output);
