let arr = [0, 1, 2, 3, 4, 5, 6];
function FilterEven(arr) {
  return arr.filter((e) => {
    return e % 2 === 0 && e>0; // checks if the number is even
  });
}

let result = FilterEven(arr);

console.log(result);
