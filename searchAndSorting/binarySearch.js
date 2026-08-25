
const binarySearch=(arr,targetElem)=>{
    let leftPointer = 0;
    let rightPointer = arr.length-1;
     let middle;

  while (leftPointer <= rightPointer){
    middle = Math.floor((leftPointer + rightPointer)/2)
    if(arr[middle] == targetElem){
        return middle;
    }
    else if(arr[middle] < targetElem){
        leftPointer = middle+1;
    }else{
        rightPointer = rightPointer -1;
    }
  }
  return middle
}

console.log(binarySearch([5],5))

