

const lengthOfLastWord = (str) => {
    let charCount = 0;
    let position = 0;
    let n = str.length -1;
    while( n >=0){
        if(str[n] == " "){
            charCount++;
        }else{
            if(charCount > 0){
                break;
            }
        }
        n--;
    }
    // for (let i = str.length - 1; i >= 0; i--) {
    //     if (str[i] !== " ") {
    //         position = i;
    //         break;
    //     }
    // }
    // for (let i = position; i >= 0; i--) {
    //     if (str[i] !== " ") {
    //         charCount++
    //     } else {
    //         return charCount;
    //     }
    // }
    return charCount;
}

console.log(lengthOfLastWord("Hello World     "))