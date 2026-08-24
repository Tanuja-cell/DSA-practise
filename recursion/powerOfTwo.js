
let numb = 6
console.log(1.5/2)

function powerOfTwo(n){
    console.log("n",n)
    if(n == 1) return true;
    if(n%2 === 0){
        return powerOfTwo(n/2)
    }
    else{
        return false;
    }
}

console.log(powerOfTwo(62))