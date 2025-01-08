const fs = require("fs");

function FileCleaner() {
  let content = fs.readFileSync("./text.md", "utf-8");

  content = content.split(/\s+/).join(' ');
//   console.log(content)


  fs.writeFileSync("./text.md", content, "utf-8", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File cleaned successfully!");
  });
}

FileCleaner();
