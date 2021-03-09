let arr = [1,2,3];

Array.prototype.ownMap = function(callback) {
  let mappedArr = [];
  for(let i of this) {
    mappedArr.push(callback(this[i]))
  }
  return mappedArr;
}

let newArr = arr.ownMap(function(element) {
  return element + 1;
});

console.log('arr: ', arr);
// not mutated and returns [1, 2, 3]
console.log('newArr: ', newArr);
// returns [2, 3, 4]

