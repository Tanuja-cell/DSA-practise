// write a function to tell the number of digits a number HashChangeEvent
// eg: 123 , o/p is 3


function countDigits(num){
    if(num === 0) {
        console.log(0)
    }
    let n = Math.abs(num); // to handle negative case number than we just make that number to +ve 
    let count = 0;
    let reminder = 0; 
    while(n > 0){
        n =  Math.floor(n/10); // use Math.floor method so that the value always be in integer not in decimal number
        count = count+1;
    }
    console.log(count)
}
countDigits(123)

