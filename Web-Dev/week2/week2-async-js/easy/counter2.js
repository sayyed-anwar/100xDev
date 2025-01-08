function counter() {
  let count = 0;
  setTimeout(() => {
    console.clear();
    console.log("Count:", count);
    count++;
  }, 1000);
}

counter();
