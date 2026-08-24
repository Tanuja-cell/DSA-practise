

const linearSearch=(arr,targetElem)=>{
    for(let i=0; i< arr.length; i++){
        if(arr[i] == targetElem){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([1,5,6,0,8],10))