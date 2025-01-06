// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function callback() {
//   console.log("p - 3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);

//==========================//

// function ramdon() {}

// let p = new Promise(ramdon); // supposed to return u something eventually
// console.log(p);

//============================//

function DoAsyncOp(resolve) {
  setInterval(resolve, 3000);
}

const j = new Promise(DoAsyncOp);
function callback() {
  console.log("j - 3 seconds have passed");
}

j.then(callback);
