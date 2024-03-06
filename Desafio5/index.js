function reverseString(str) {
  return str.split('').reverse().join('');
}

const myString = 'Hello World!';
const reversedString = reverseString(myString);

console.log(reversedString); /* Output: !dlroW olleH */
