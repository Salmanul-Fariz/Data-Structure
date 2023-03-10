class HashTable {
  constructor(length) {
    this.table = new Array(length);
    this.size = length;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    // this.table[index] = value;
    const bucket = this.table[index];

    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((val) => val[0] === key);

      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find((val) => val[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;

    const bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find((val) => val[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(4);

///////////////////////////////
///////// Set value ///////////
///////////////////////////////

console.log('------------------------------');
console.log('Set value');
console.log('------------------------------');
table.set('a', 'first');
table.set('b', 'second');
table.set('c', 'third');
table.display();

///////////////////////////////
//////// remove value /////////
///////////////////////////////

console.log('------------------------------');
console.log('remove value');
console.log('------------------------------');
table.remove('b');
table.display();

///////////////////////////////
////////// get value //////////
///////////////////////////////

console.log('------------------------------');
console.log('get value');
console.log('------------------------------');
console.log(table.get('a'));
