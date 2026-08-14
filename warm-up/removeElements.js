const removeElements=(nums,val)=>{
    let pointerIndex = -1;
    for(let i = 0; i< nums.length; i++){
       if(nums[i] === val){
         nums[pointerIndex+1] = nums[i];
          pointerIndex++;
       }
    }
    console.log(pointerIndex+1)
}

removeElements([3,2,2,3],3)