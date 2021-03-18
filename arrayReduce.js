// How Array.prototype.reduce works
***************************************

// It takes 4 arguments in the callback function
// firts argument is the accumulator - gets assigned the return value of the callback function called on the previous calculation
// the second is the current element being processed
// third is the index of that element
// fourth is the array upon which reduce is called.

// callback function takes a second parameter which is the inital value of the accumulator.


const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];


const sumOfAges = users.reduce((sum, user) => sum + user.age, 0)

console.log(sumOfAges)