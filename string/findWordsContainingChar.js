

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