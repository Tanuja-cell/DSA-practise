//remove dupliactes from an array without creating any new array
// eg. i/p - [0,0,1,1,1,2,2,3,3,4] o/p - [0,1,2,3,4,_,__,_,__]


const removeDuplicates=(nums)=>{
    let pointerIndex = 1;
    for(let i = 0; i< nums.length-1; i++){
       if(nums[i] === nums[i+1]){
          continue;
       }else{
        nums[pointerIndex] = nums[i+1]
        pointerIndex++;
       }
    }
    console.log(nums)
}

removeDuplicates([0,0,1,1,1,2,2,3,3,4])