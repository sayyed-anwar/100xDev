let arrObj = [
  {
    name: "John",
    age: 15,
  },
  {
    name: "Jane",
    age: 30,
  },

  {
    name: "Bob",
    age: 20,
  },
];


function FilterAdult(){
  return arrObj.filter(person => person.age >= 18);
}

let filteredArray = FilterAdult();

console.log(filteredArray);