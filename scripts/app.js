// Verbal questions
// 1) What is the difference between a parameter and an argument?
// 2) Within a function, what is the difference between return and console.log?
// 3) What are the implications of the ability of a function to return a value?

// 1. A parameter is anvariable passed into a function definition. An argument is a variable that is being used to call a function
// 2. A return only passes an output, usually to another function or variable. Console.log just prints out to the console.
// 3. The function being able to return a value gives it the abilty to pass its outputted value as an argument to another function.

// Palindrome again

function checkPalindrome(word){
    reverse = word.split('').reverse().join('');
    if(word === reverse) return true;
    else return false;

}

console.log(checkPalindrome('radar'));
console.log(checkPalindrome('borscht'));

// Digit Sum

function sumDigits(num){
    const numArr = num.toString().split('');
    let sum = 0;
    for(let i = 0; i < numArr.length; i++){
        sum += Number(numArr[i]);
    }
    return sum;
}

console.log(sumDigits(42));
