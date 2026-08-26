


const mergeTwoSortedArray = (arr1, arr2) => {
    let n = arr1.length + arr2.length;

    let i = 0;
    let j = 0;
    let result = [];

    for (let k = 0; k < n; k++) {

        if (i === arr1.length) {
            result[k] = arr2[j];
            j++;
        }
        else if (j === arr2.length) {
            result[k] = arr1[i];
            i++;
        }
        else if (arr1[i] > arr2[j]) {
            result[k] = arr2[j];
            j++;
        }
        else {
            result[k] = arr1[i];
            i++;
        }
    }

    console.log("result", result);
    return result;
};


const mergeSort=(arr)=>{
if(arr.length <=1) return arr;
let mid = Math.floor(arr.length/2);
let left= mergeSort(arr.slice(0,mid));
let right = mergeSort(arr.slice(mid))
console.log("left",left)
console.log("right",right)
return mergeTwoSortedArray(left,right)

}

mergeSort([2, 5, 4, 1])