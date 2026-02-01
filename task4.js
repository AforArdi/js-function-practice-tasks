// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function count_zero(binaryStr) {
    let count = 0;
    let toArr = binaryStr.split("").map(Number);

    for (let i = 0; i < toArr.length; i++) {
        if (toArr[i] === 0) {
            count++;
        }
    }
    return count;
}

let myBinary = "01000101110110";
console.log(count_zero(myBinary));