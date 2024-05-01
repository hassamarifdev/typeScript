//array of numbers
let numbers: number[] = [1, 2, 3, 4]; //only numbers are allowed in this array
console.log(numbers);

// let arr = [1,23,4,5,6, 'hello'] //not acceptable because strings and number together

//array of strings and numbers
let numberString: (string | number)[] = [1, 2, 3, 4, "hello"]; //only string and numbers are allowed
console.log(numberString);

//array of strings
let greetings: string[] = ["hello", "hi", "chao", "salam"];
console.log(greetings);

//array of mixed data numbers, strings and boolean
let mixedData: (string | number | boolean)[] = [12, "hello", true];
console.log(mixedData);

//nested number type array
let myNums: number[][] = [
  [1, 2, 3, 4, 5, 6],
  [1, 3, 5, 7, 9],
  [2, 4, 6, 8],
]; //here we can only add arrays but not numbers.
console.log(myNums);

//nested string type array
let myStr: string[][] = [
  ["hello", "chao", "hi", "salam"],
  ["what", "why", "how"],
]; //but here we can only add string type arrays and not strings

//nested arrays of string and numbers
let mixedData1: (string | number)[][] = [
  ["hello", "chao", "hi", "salam"],
  ["what", "why", "how"],
  [2, 4, 6, 8],
  [],
];

console.log(mixedData1);
