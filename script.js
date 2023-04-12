// Define an array with at least 5 elements containing a string, a number, and a boolean
let yourArray = ['apple', 123, true, 'orange', false];

// Accessing elements in the array
console.log(yourArray[0]); // logs 'apple'
console.log(yourArray[1]); // logs 123
console.log(yourArray[2]); // logs true

// Modifying elements in the array
yourArray[3] = 'banana';
console.log(yourArray); // logs ['apple', 123, true, 'banana', false]

// Adding elements to the array
yourArray.push(456);
console.log(yourArray); // logs ['apple', 123, true, 'banana', false, 456]

// Removing elements from the array
yourArray.pop();
console.log(yourArray); // logs ['apple', 123, true, 'banana', false]
