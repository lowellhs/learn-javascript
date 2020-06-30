// ------------------- ARRAY -------------------
let arr1 = [1, "2", 3];
arr1.push(4, 5, 6);                         console.log(arr1);
arr1.pop();                                 console.log(arr1);
arr1.shift();                               console.log(arr1);
arr1.unshift(-1, 0, 1);                     console.log(arr1);

arr1.splice(1, 2);                          console.log(arr1);
arr1.splice(0, 2, "0", "1", "2");           console.log(arr1);
arr1.splice(-1, 0, "4.1", "4.9");           console.log(arr1);

console.log(arr1.slice(1, 3));
console.log(arr1.slice(-3));

let arr2 = [1, 2];
arr2 = arr2.concat([3, 4, 5], [6, 7]);      console.log(arr2);

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log( arr3.filter(num => num % 2 == 0) );
console.log( arr3.map(num => num*2) );
console.log( arr3.sort((a, b) => b-a) );
console.log( arr3.reduce((max, current) => current > max ? current : max, Number.NEGATIVE_INFINITY) );
console.log( arr3.reduce((min, current) => current < min ? current : min, Number.POSITIVE_INFINITY) );

// indexOf, lastIndexOf     -> find equals
// find, findIndex          -> same like filter but return first
// reverse
// split, join

// ------------------- ITERABLES -------------------
let range = {
    from: 0,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
      },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
}
for (let num of range) {
    console.log("range", num);
}
let arrFromIterator = Array.from(range);
console.log(arrFromIterator, num => num*2);

// ------------------- MAP AND SET -------------------
let map = new Map();
map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key
console.log(map.get('1'), map.get(1), map.get(true), map.size)
let map2 = new Map([
    [1, "value1"],
    [2, "value2"],
]);
console.log(map2);
// keys(), values(), entries() or for..of
// Object.fromEntries(map.entries())
// map.delete(key), map.has(key), map.clear()
// chaining map.set

let set = new Set([1, 2, 3, 1, 2]);
set.add(4);
console.log(set, set.size);
set.delete(4);
console.log(set, set.size);
console.log(set.keys(), set.values());

// WeakMap() -> key as object, delete key delete object
// WeakSet()
