//sum of array elements using recursion

let arr = [5,3,2,0,1]
// function sumOfArray(n){
//     if(n ==0) return arr[0];
//     return arr[n] = arr[n]+sumOfArray(n-1)
// }

// console.log(sumOfArray(arr.length-1))

//sum of array elements which are odd using recursion 


let arr1 = [4,5,3,2,0,1]
function sumOfArrayOdd(n){
    if(n == 0) return arr[0]%2 ==0 ? 0 : arr[0];
    if(arr[n]%2 == 0){
         return  sumOfArrayOdd(n-1)
    }
    else{
     return arr[n] + sumOfArrayOdd(n-1)
    }
}

console.log(sumOfArrayOdd(arr.length-1))