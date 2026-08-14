
// 344. Reverse String
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

function reverseString(arr){
    let l = arr.length;
    let max= Math.floor(l/2);
    for(let i = 0; i < max; i++){
        let temp =  arr[i];
        arr[i] = arr[l-1-i];
        arr[l-1-i]=temp;
    }
console.log(arr)
}
reverseString(["h","e","l","l","o"])