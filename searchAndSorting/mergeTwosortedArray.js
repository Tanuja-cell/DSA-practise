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
};

mergeTwoSortedArray([1, 3, 5, 7], [2, 4, 8, 9]);