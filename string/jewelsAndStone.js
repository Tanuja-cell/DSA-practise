

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