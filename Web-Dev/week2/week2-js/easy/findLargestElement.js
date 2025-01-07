function findLargestElement(arrOfElements) {
  let largestElem = arrOfElements[0]; //5
  for (let i = 1; i < arrOfElements.length; i++) {
    if (arrOfElements[i] > largestElem) {
      largestElem = arrOfElements[i];
    }
  }
  return largestElem;
}

let arr = [5, 10, 15, 20, 25];

console.log(findLargestElement(arr)); 
