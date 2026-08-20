
// 283. Move Zeroes
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?
 

// Seen this question in a real interview before?
// 1/6

let arr = [0,1,0,3,12];

const findNextNonZeroElement=(arr,startIndex)=>{
    console.log("startIndex",startIndex)
    while(startIndex < arr.length){
        if(arr[startIndex] !==0){
            return startIndex
        }else{
            startIndex++;
        }
    }
    return -1;
}


const nonZeroArr =(arr) =>{
    for(let i = 0; i< arr.length-1;i++){
        if(arr[i] === 0){
            let foundIndex =  findNextNonZeroElement(arr,i+1);
            if(foundIndex !== -1){
            arr[i] = arr[foundIndex];
            arr[foundIndex] = 0;
            }
        }
    }
    console.log("ans",arr)
}

nonZeroArr([0,1,0,3,12])