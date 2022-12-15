///////////////////////////////
///////// Map Array ///////////
///////////////////////////////

const mapArray = [1, 2, 3, 4, 5];
const resultMap = mapArray.map((e) => e + 1);

console.log('------------------------------');
console.log('Map Array');
console.log('------------------------------');
console.log(resultMap);
// Big-O = O(n)

///////////////////////////////
//////// Filter Array /////////
///////////////////////////////

const filterArray = [1, 2, 3, 4, 5];
const resultFilter = filterArray.filter((e) => e > 2);

console.log('------------------------------');
console.log('Filter Array');
console.log('------------------------------');
console.log(resultFilter);
// Big-O = O(n)
