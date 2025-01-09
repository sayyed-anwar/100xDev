const fs = require("fs");

const expecsiveOperation = () => {
  let count = 0;

  for (let i = 0; i < 1000; i++) {
    count+=i;
  }
  return count;
};

fs.writeFile(
  "./text.md",
  " this is a text file data after updation",
  (err, _) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File Written successfully!!");
    let data = expecsiveOperation();
    console.log(data)
  }
);
