// o/p: 


// Level 1 — Basic Star Patterns: Sqaure

// * * * *
// * * * *
// * * * *
// * * * *
function square(n){
for(let i =0; i<n; i++){
    let row ="";
    for(j=0; j<n;j++){
        row = row + " *"
    }
 console.log(row)
}

}
//  square(4)

//  increase triangle CanvasPattern
// *
// * *
// * * *
// * * * *
// * * * * *

function increasingTrianglePattern(n){
    for(let i = 0; i< n ; i++){
        let row ="";
        for(let j = 0 ; j <=i ; j++){
         row = row + " *"
        }
        console.log(row)
    }
}
//increasingTrianglePattern(4)

// Decreasing Traingle pattern

// * * * * *
// * * * *
// * * *
// * *
// *

function decreasingTrianglePattern(n){
    for(let i = 0; i < n ; i++){
        let row = "";
        for(let j = n -i ; j >0  ; j--){
         row = row + " *"
        }
        console.log(row)
    }
}
// decreasingTrianglePattern(4)


// 4. Right-aligned triangle

//         *
//       * *
//     * * *
//   * * * *
// * * * * *



function rightAllignedTrianglePattern(n){
    for(let i = 0; i < n ; i++){
        let row = "";
        for(let j = 0 ; j < n - (i+1)  ; j++){
         row = row + "-"
        }
        for(k = 0 ; k < i+1; k++){
            row = row + "*";
        }
        console.log(row)
    }
}

// rightAllignedTrianglePattern(4)

// 1 and 0 pattern 

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

function binaryNumberPattern(n){
    for(let i = 1; i <= n ; i++){
        let row = "";
        for(let j = 1 ; j <= i  ; j++){
         row = row + j%2;
        }
        for(k = 0 ; k <= n-(i+1); k++){
            row = row + "_";
        }
        console.log(row)
    }
}
binaryNumberPattern(10)
