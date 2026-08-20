// 485. Max Consecutive Ones
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2
 


const countLongConseqOnes = (arr) => {
    let maxOnes = 0;
    let currentCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++;
            if (currentCount > maxOnes) {
                maxOnes = currentCount;
            }
        } else {
           currentCount = 0;
        }
    }
    console.log("maxOnes", maxOnes)
}
countLongConseqOnes([1, 0, 1, 1, 1,0, 1])