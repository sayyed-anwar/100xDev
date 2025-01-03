const fs = require("fs");

const data1 = fs.readFileSync("./a.txt", "utf8", () => {
  console.log("succeeded!!");
});
console.log(data1);

const data2 = fs.readFileSync("./b.txt", "utf8", () => {
  console.log("succeeded!!");
});

console.log(data2);
