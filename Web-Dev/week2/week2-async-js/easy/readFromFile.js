const fs = require("fs");

function expensiveOperation() {
  let count = 0;
  for (let i = 0; i < 1000; i++) {
    count += i;
  }
  console.log("Expensive operation completed:", count);
}

fs.readFile("./text.md", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log(data);
  expensiveOperation();
});
