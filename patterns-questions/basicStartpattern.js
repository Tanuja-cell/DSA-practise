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
 square(4)