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

///////////////////////////////
//////// Reduce Array /////////
///////////////////////////////

const reduceArray = [1, 2, 3, 4, 5];
const resultReduce = reduceArray.reduce((total, el) => (total += el), 0);

console.log('------------------------------');
console.log('Reduce Array');
console.log('------------------------------');
console.log(resultReduce);
// Big-O = O(n)

///////////////////////////////
//////// Concat Arrays /////////
///////////////////////////////

const concatArray1 = [1, 2, 3];
const concatArray2 = [4, 5];
const resultConcat = concatArray1.concat(concatArray2);

console.log('------------------------------');
console.log('concat Array');
console.log('------------------------------');
console.log(resultConcat);
// Big-O = O(n)
