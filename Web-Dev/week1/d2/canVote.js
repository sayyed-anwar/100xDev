function canVote(age){

    if(age >= 18){
        return true;
    }else {
        return false;
    }

}

let result1 = canVote(18);
let result2 = canVote(13);

console.log("result 1: ",result1, "result 2 : ",result2)