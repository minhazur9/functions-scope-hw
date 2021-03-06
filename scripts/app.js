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
    if(word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?\s]/g,'').toUpperCase() === reverse.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?\s]/g,'').toUpperCase()) return true;
    else return false;
}

// console.log(checkPalindrome('Radar'));
// console.log(checkPalindrome('Borscht'));
// console.log(checkPalindrome("Sit on a potato pan Otis"));
// console.log(checkPalindrome("Bird rib"));
console.log(checkPalindrome("Sit on a potato pan, Otis!!!"));
console.log(checkPalindrome("Cigar? Toss it in a can! It is so tragic."));

// Digit Sum

// function sumDigits(num){
//     const numArr = num.toString().split('');
//     let sum = 0;
//     for(let i = 0; i < numArr.length; i++){
//         sum += Number(numArr[i]);
//     }
//     return sum;
// }

// console.log(sumDigits(42));

// Pythagoras

// function calculateSide(sideA, sideB){
//     return Math.sqrt((sideA ** 2) + (sideB ** 2));
// }

// console.log(calculateSide(8,6));

// Sum Array

// function sumArray(array){
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     return sum;
// }

// console.log(sumArray([1, 2, 3, 4, 5, 6]));

// Prime Numbers

// function checkPrime(num){
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i === 0) return false;
//     }
//     return true;
// }

// function printPrimes(limit){
//     for(let i = 2; i <= limit; i++){
//         if(checkPrime(i)) console.log(i);
//     }
// }

// printPrimes(97);

// function insertDash(num){
//     const numArr = num.toString().split('');
//     const newArr = [];
//     let prevOdd = false;
//     for(let i = 0; i < numArr.length; i++){
//         if(numArr[i] % 2 !== 0 && prevOdd) newArr.push('-'); 
//         newArr.push(numArr[i]);
//         if(numArr[i] % 2 === 0) prevOdd = false;
//         if(numArr[i] % 2 !== 0) prevOdd = true;
//     }
//     return newArr.join('');
// }
// console.log(insertDash(454793));

// function reverseString(word){
//     let reversed = '';
//     for(let i = word.length-1; i >= 0; i-- ){
//         reversed += word.substring(i,i+1);
//     }
//     return reversed;
// }

// console.log(reverseString("commit"));


