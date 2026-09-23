
// 771. Jewels and Stones
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".
const jewelsAndStone = (jewels,stones)=>{
    let count = 0 ;
    let jSet= new Set();
    for(let i = 0 ; i < jewels.length;i++){
        jSet.add(jewels[i])
    }
     for(let i = 0 ; i < stones.length;i++){
       if(jSet.has(stones[i])){
        count++;
       }
    }
    // for(let i =0; i < stones.length; i++){
    //     for(let j =0 ; j < jewels.length; j++){
    //         if(stones[i] == jewels[j]){
    //             count++;
    //         }
    //     }
    // }
    return count;
}
console.log(jewelsAndStone("aA","aAAbbbb"))