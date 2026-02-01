// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function numTrick(a){
    let result = "";
    if (a%2===1){
        result = a * 2;
    } else if (a%2===0){
        result = a / 2;
    }
    return result;
}

console.log(numTrick(3));