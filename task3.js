// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    
    return result / arr.length;
}
console.log(make_avg([4, 6, 5]));