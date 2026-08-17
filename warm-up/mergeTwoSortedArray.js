

const mergeTwoSortedArray=(nums1, m, nums2,n )=>{
   let p1 = 0;
let p2 = 0;

let nums1Copy = nums1.slice(0, m);

for (let i = 0; i < n + m; i++) {
    if (p1 >= m) {
        nums1[i] = nums2[p2];
        p2++;
    } 
    else if (p2 >= n) {
        nums1[i] = nums1Copy[p1];
        p1++;
    } 
    else if (nums1Copy[p1] < nums2[p2]) {
        nums1[i] = nums1Copy[p1];
        p1++;
    } 
    else {
        nums1[i] = nums2[p2];
        p2++;
    }

}
    
console.log(nums1);
}

mergeTwoSortedArray([1,2,3,0,0,0],3,[2,5,6],3)