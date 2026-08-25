


const insertionSort = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let prevIndex = i-1;
        while(current < arr[prevIndex] && prevIndex >=0){
            arr[prevIndex+1] = arr[prevIndex];
            prevIndex--;
        }
        arr[prevIndex +1] = current
    }
    console.log("arr", arr)
}
insertionSort([2, 5, 4, 1])