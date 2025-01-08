const fs = require("fs");

function expensiveOperations() {
  let count = 0;
  for (let i = 0; i < 1000000000; i++) {
    count += i;
  }
  return count;
}

fs.readFile("./text.md", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(" File Data: ",data);

  let expOprData= expensiveOperations();
  console.log("Expensive Operations Result:", expOprData);
});
