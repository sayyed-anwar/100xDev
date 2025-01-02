const arrObj = [
  {
    name: "Adnan",
    age: 25,
    gender: "Male",
  },
  {
    name: "Anwar",
    age: 23,
    gender: "Male",
  },
  {
    name: "Sadaf",
    age: 21,
    gender: "Female",
  },
  {
    name: "Faiz",
    age: 10,
    gender: "Male",
  },
  {
    name: "Farha",
    age: 7,
    gender: "Female",
  },
];

function FilterAdultByGender(arrObj) {
  return arrObj.filter(
    (person) => person.gender === "Male" && person.age >= 18
  );
}

let filteredData = FilterAdultByGender(arrObj);
console.log(filteredData);
