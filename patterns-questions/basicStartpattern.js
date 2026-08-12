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

//  increase triangle CanvasPattern*
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
decreasingTrianglePattern(4)