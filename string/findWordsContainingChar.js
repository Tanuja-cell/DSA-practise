



// 2942. Find Words Containing Character
// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

 

// Example 1:

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
// Example 2:

// Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
// Output: [0,2]
// Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.

const findWordsContainingChar= (strArray,x)=>{
    let result = [];
    for(let i = 0 ; i< strArray.length; i++){
        if(strArray[i].includes(x)){
            result.push(i)
        }
    }
    return result;
}

console.log(findWordsContainingChar(["abc","bcd","aaaa","cbc"],"a"))