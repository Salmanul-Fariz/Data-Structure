///////////////////////////////
///////// Sample Set //////////
///////////////////////////////

const sampleSet = new Set([1, 2, 3]);

console.log('------------------------------');
console.log('Sample Set');
console.log('------------------------------');
console.log(sampleSet);

///////////////////////////////
///////// Add El Set //////////
///////////////////////////////

const addElSet = new Set([1, 2, 3]);
addElSet.add(4);

console.log('------------------------------');
console.log('Add Element Set');
console.log('------------------------------');
console.log(addElSet);

///////////////////////////////
//////// Delete El Set ////////
///////////////////////////////

const deleteElSet = new Set([1, 2, 3]);
deleteElSet.delete(3);

console.log('------------------------------');
console.log('Delete Element Set');
console.log('------------------------------');
console.log(deleteElSet);

///////////////////////////////
///////// clear Set ///////////
///////////////////////////////

const clearSet = new Set([1, 2, 3]);
clearSet.clear();

console.log('------------------------------');
console.log('Clear Set');
console.log('------------------------------');
console.log(clearSet);
