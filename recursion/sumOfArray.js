//sum of array elements using recursion

let arr = [5,3,2,0,1]
function sumOfArray(n){
    if(n ==0) return arr[0];
    return arr[n] = arr[n]+sumOfArray(n-1)
}

console.log(sumOfArray(arr.length-1))