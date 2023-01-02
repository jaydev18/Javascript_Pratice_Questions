/*Reverse a number
make a function that can take any non-negative integer as an argument and return it
with its digits in descending order. Essentially, rearrange the digits to create the
highest possible number.

Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/

function reverseNumber(n) {
  let rev = 0;
  while (n != 0) {
    let lastdigit = n % 10;
    rev = rev * 10 + lastdigit;
    n = Math.floor(n / 10);
  }
  console.log("reverse number is:" + rev);
}

reverseNumber(1234);
