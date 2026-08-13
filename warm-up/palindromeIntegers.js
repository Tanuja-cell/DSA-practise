//write a function to check if an integer is a palindrome

const checkPalindrome = (num) => {
    let n = num;
    let sum = 0;
    let place = 1;

    while (n > 0) {
        let lastDigit = n % 10;
        sum = sum*10 + lastDigit;
        n = Math.floor(n / 10);
        place = place * 10;
    }
    console.log("sum",sum)
    if (num == sum) {
        console.log("it is palindrome")
    } else {
        console.log("It is not palindrome")
    }
}

checkPalindrome(143)