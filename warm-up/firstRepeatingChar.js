

// const firstRepeatingChar=(str)=>{
//     // let input = str.toLowerCase();
//     // let localStr ="";
//     // for(let i=0; i<input.length;i++){
//     //     if(localStr.includes(input[i])){
//     //         console.log(input[i]);
//     //         return;
//     //     }else{
//     //         localStr = localStr+ input[i]
//     //     }
//     // }
//     let strArr =  str.split("")
//     console.log("strArr",strArr)

//     let ansObj = strArr.reduce((obj,item)=>{
//         if(obj[item]){
//             obj[item] = obj[item] +1;
//         }
//         else{
//             obj[item] = 1;
//         }
//         return obj
//     },{})
//     console.log("ansObj",ansObj)
//     for(const k in ansObj){
//         if(ansObj[k] == 2){
//             console.log("ans",k);
//             return
//         }
//     }
// } 
// firstRepeatingChar("repeated")

const firstRepeatingChar = (str) => {
    const strArr = str.split("");

    const ansObj = strArr.reduce((obj, item) => {
        if (obj[item]) {
            obj[item]++;
        } else {
            obj[item] = 1;
        }
        return obj;
    }, {});

    for (const char of strArr) {
        if (ansObj[char] > 1) {
            console.log("ans", char);
            return char;
        }
    }
};

firstRepeatingChar("repeated");