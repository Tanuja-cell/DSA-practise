


const maxOfCandV =(str)=>{
    let ans={};
    console.log(ans.c)
    for(let i = 0 ; i < str.length;i++){
        if(!ans[str[i]]){
            ans[str[i]] = 1;
        }
        else{
            ans[str[i]]= ans[str[i]]+1;
        }
    }
    let maxOfC = 0;
    let maxOfV = 0;
    let vowels = "aeiou"
    for(const key in ans){
      if(vowels.includes(key)){
         if(ans[key] > maxOfV){
            maxOfV = ans[key]
         }
      }else{
        if(ans[key] > maxOfC){
            maxOfC = ans[key]
        }
      }
    }
    console.log("maxOfC", maxOfC);
     console.log("maxOfV", maxOfV);
     return maxOfC + maxOfV

}

console.log(maxOfCandV("successes"))