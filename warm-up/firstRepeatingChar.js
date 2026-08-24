

const firstRepeatingChar=(str)=>{
    let input = str.toLowerCase();
    let localStr ="";
    for(let i=0; i<input.length;i++){
        if(localStr.includes(input[i])){
            console.log(input[i]);
            return;
        }else{
            localStr = localStr+ input[i]
        }
    }
} 
firstRepeatingChar("tanuja")