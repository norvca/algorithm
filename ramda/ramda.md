## Navigation
[1. Arithmetic](#1-arithmetic)

[2. String](#2-string)

[3. Array](#3-array)

- merge
- remove
- sort
- replace

[4. Object](#4-object)

[5. Function](#5-function)

[6. Relation](#6-relation)

[7. Logic](#7-logic)

[8. Types](#8-types)



## 1. Arithmetic
#### add

Add two numbers

```js
R.add(1, 2); // 3

const plus10 = R.add(10);
plus10(5) // 15
```



#### subtract

Subtract two numbers

```js
R.subtract(10, 8); // 2

const minus5 = R.subtract(R.__, 5);
minus5(17); // 12

const complementaryAngle = R.subtract(90);
complementaryAngle(30); // 60
complementaryAngle(72); // 18
```



#### multiply

Multiplies two numbers

```js
R.multiply(2, 5);  // 10

const double = R.multiply(2);
const triple = R.multiply(3);
double(3); // 6
triple(4); // 12
```



#### divide

Divides two numbers

```js
R.divide(4, 2); // 2

const half = R.divide(R.__, 2);
half(20); // 10

const reciprocal = R.divide(1, R.__);
reciprocal(5) // 0.2
```



#### sum

Adds together all the elements of a list

```js
R.sum([1,3,5,7,9]); // 25
```



#### product

Multiplies together all the elements of a list

```js
R.product([2,4,6,8,100,1]); // 38400
```



#### negate

Negates its argument

```js
R.negate(42); // -42
```



#### dec

Decrements its argument

```js
R.dec(42); // 41
```



#### inc

Increments its argument.

```js
R.inc(42); // 43
```



#### modulo

Divides the first parameter by the second and returns the remainder

```js
R.modulo(17, 3); // 2
R.modulo(-17, 3); // -2
R.modulo(17, -3); // 2

const isOdd = R.modulo(R.__, 2);
isOdd(42); // 0
isOdd(21); // 1
```



#### mathMod

`MathMod` behaves like modulo but mathematically, it returns `NaN` when the modulus is **zero**, **negative** or **float**

```js
// (The first argument) + (the second argument * n) until it turns to positive number
R.mathMod(-17, 5);  // 3

R.mathMod(17, 5);   // 2
R.mathMod(17, -5);  // NaN
R.mathMod(17, 0);   // NaN
R.mathMod(17.2, 5); // NaN
R.mathMod(17, 5.3); // NaN

const clock = R.mathMod(R.__, 12);
clock(15); // 3
clock(24); // 0

const seventeenMod = R.mathMod(17);
seventeenMod(3);  // 2
seventeenMod(4);  // 1
seventeenMod(10); // 7
```



#### mean

Returns the mean of the given list of numbers

```js
R.mean([2, 7, 9]); // 6
R.mean([]); // NaN
```



#### median

Returns the median of the given list of numbers

```js
R.median([2, 9, 7]); // 7
R.median([7, 2, 10, 9]); // 8
R.median([]); // NaN
```



## 2. String

#### toLower

Turn a string to lowercase

```js
R.toLower('ABC.123'); // 'abc.123'
```



#### toUpper

Turn a string to uppercase

```js
R.toUpper('abc.123'); // 'ABC.123'
```



#### toString

`* → String`

Returns the **string representation** of the given value

```js
R.toString(42); // '42'
R.toString('abc'); // '"abc"'
R.toString([1, 2, 3]); // '[1, 2, 3]'
R.toString({foo: 1, bar: 2, baz: 3}); // '{"bar": 2, "baz": 3, "foo": 1}'
R.toString(new Date('2001-02-03T04:05:06Z')); // 'new Date("2001-02-03T04:05:06.000Z")'
```



#### trim

Removes whitespace from both ends of  the **string;**

```js
R.trim('  a bc     ') // 'a bc'
R.map(R.trim,R.split(',', 'x,y , z ')) //['x', 'y', 'z']
```



#### replace

Replace a **substring** or **regex** match in a **string**

```js
R.replace('foo', 'bar', 'foo foo foo');  // 'bar foo foo'
R.replace(/foo/, 'bar', 'foo foo foo');  // 'bar foo foo'
R.replace(/foo/g, 'bar', 'foo foo foo'); // 'bar bar bar'
```



#### split

Splits a **string**  into an **array of strings**

```js
R.split('.', 'a.b.cd.efg'); // ['a', 'b', 'cd', 'efg'] 

const pathComponents = R.split('/');
R.tail(pathComponents('/usr/local/bin/node')) // ['usr', 'local', 'bin', 'node'] 
```



#### match

Test  **regular expression** against a **string**, return **empty array** when there are no match

```js
R.match(/[a-z]a/g, 'banana'); // ['ba', 'na', 'na']
R.match(/a/, 'b'); // []
R.match(/a/, 1); // 1 does not have a method named "match"
```



#### test

Determines whether a given **string** matches a given **regular expression**

```js
R.test(/z$/, 'xyz') // true
R.test(/^z/, 'xyz') // false
```



## 3. Array

### 1. Replace

#### adjust

Apply a function to the value at the given index of an array, return a new copy of the result

```js
R.adjust(1, R.toUpper, ['a', 'b', 3, 'd']); // [ 'a', 'B', 3, 'd' ]
R.adjust(-2, R.add(1), ['a', 'b', 3, 'd']); // [ 'a', 'b', 4, 'd' ] 
```



### 2. Check

#### all

Returns true if all elements in the array satisfies the predicate function

```js
const passingScore = R.gte(R.__, 60);

R.all(passingScore, [84, 99, 60, 71]); // true
R.all(passingScore, [92, 66, 55, 81]); // false
```



#### any

Returns true if any elements in the array satisfies the predicate function

```js
const lessThan0 = R.lt(R.__, 0);

R.any(lessThan0, [1, 2]); // false
R.any(lessThan0, [-1, 2]); //true
```



#### none

Returns true if no elements in the array satisfies the predicate function

```js
const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 === 1;

R.none(isEven, [1, 3, 5]); // true
R.none(isOdd, [2, 4, 5]); // false
```



#### startsWith

Checks if a array or string starts with the provided element

```js
R.startsWith('a', 'abc'); // true
R.startsWith('b', 'abc'); // false
R.startsWith(['a'], ['a', 'b', 'c']); // true
R.startsWith(['b'], ['a', 'b', 'c']); // false
```



#### endsWith

Checks if a array or string ends with the provided element

```js
R.endsWith('c', 'abc'); // true
R.endsWith('bc', 'abc'); // true
R.endsWith('b', 'abc'); // false

R.endsWith(['c'], ['a', 'b', 'c']); // true
R.endsWith(['b', 'c'], ['a', 'b', 'c']); // true
R.endsWith(['b'], ['a', 'b', 'c']); // false
```



#### includes

Check if at least one element is in the given input

```js
R.includes(3, [1, 2, 3]); // true
R.includes(4, [1, 2, 3]); // false
R.includes({ name: 'Fred' }, [{ name: 'Fred' }]); // true
R.includes([42], [[42]]); // true
R.includes([42], [[[42]]]); // false
R.includes('ba', 'banana'); //true
```





### 3. Decoration

#### aperture

Return a new array, composed of n-tuples of consecutive elements. 

```js
R.aperture(2, [1, 2, 3, 4, 5]); // [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 4, 5 ] ]
R.aperture(3, [1, 2, 3, 4, 5]); // [ [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ] ]
R.aperture(8, [1, 2, 3, 4, 5]); // []
```



#### chain

Map a function over an array and concatenates the results

```js
const duplicate = n => [n, n];

R.chain(duplicate, [1, 2, 3]); // [ 1, 1, 2, 2, 3, 3 ]
R.map(duplicate, [1, 2, 3]); // [ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] ]
```



### 4. Merge

#### prepend

Returns a new array with the given element at the front, followed by the original array

```js
R.prepend('...', ['abc']); // [ '...', 'abc' ] ​​
R.prepend('...', 'abc'); // [ '...', 'a', 'b', 'c' ]
```



#### append

Returns a new array containing the given array, followed by the **given element**

```js
R.append('...', ['abc']); // [ 'abc', '...' ]
R.append('...', 'abc'); // [ 'a', 'b', 'c', '...' ]
```



#### concat

Return the result of concatenating the **arrays** or **strings**

```js
R.concat('123', 'abc'); // 123abc
R.concat([4, 5, 6], [1, 2, 3]); // [ 4, 5, 6, 1, 2, 3 ]
R.concat([], []); // []
```



#### mergeAll

`[{k: v}] → {k: v}`

Combine the members of an array into an object

``` js
mergeAll([{ foo: 1, bar: 2, baz: 3 }]); // { foo: 1, bar: 2, baz: 3 }
mergeAll([{ foo: 1, foo: 2, baz: 3 }]); // { foo: 2, baz: 3 }
```



### 5. Cut

#### slice

Takes out a new array from the start index ( included ) to the end index ( not included )

```js
R.slice(1, 3, ['a', 'b', 'c', 'd']); // [ 'b', 'c' ]
R.slice(0, 3, 'ramda'); // ram
```



#### init

Returns all but the **last** element of the given list or string

```js
R.init([1, 2, 3]);  // [1, 2]
R.init([1, 2]);     // [1]
R.init([1]);        // []
R.init([]);         // []

R.init('abc');  // 'ab'
R.init('ab');   // 'a'
R.init('a');    // ''
R.init('');     // ''
```



#### tail

Returns all but the **first** element of the given list or string

```js
R.tail([1, 2, 3]);  //=> [2, 3]
R.tail([1, 2]);     //=> [2]
R.tail([1]);        //=> []
R.tail([]);         //=> []

R.tail('abc');  //=> 'bc'
R.tail('ab');   //=> 'b'
R.tail('a');    //=> ''
R.tail('');     //=> ''
```



#### take

Return the first **n** elements of the given array

```js
R.take(2, ['foo', 'bar', 'baz']); // [ 'foo', 'bar' ]
R.take(3, 'ramda'); // ram
```



#### takeLast

Return the last **n** elements of the given array

```js
R.takeLast(2, ['foo', 'bar', 'baz']); // [ 'bar', 'baz' ]
R.takeLast(3, 'ramda'); // mda
```



#### drop

Return all but the first **n** elements of the array or string

```js
R.drop(2, ['foo', 'bar', 'baz']); // [ 'baz' ]
R.drop(3, 'ramda'); // da

const cutHead = R.drop(1);
R.map(cutHead, [[1, 2, 3], '123']); // [ [ 2, 3 ], '23' ]
```



#### dropLast

Return all but the first **n** elements of the array	

```js
R.dropLast(2, ['foo', 'bar', 'baz']); // [ 'foo' ]
R.dropLast(3, 'ramda'); // ra

const cutHead = R.dropLast(1);
R.map(cutHead, [[1, 2, 3], '123']); // [ [ 1, 2 ], '12' ]
```



#### dropRepeats

Returns a new array without consecutively repeating elements

```js
R.dropRepeats([1, 1, 2, 3, 4, 4, 4, 3]); // [ 1, 2, 3, 4, 3 ]
```



### 6. Filter

#### dropWhile

Excluding all the heading elements which satisfies the predicate function

```js
const lteThree = R.lte(R.__, 3);

R.dropWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); // [ 4, 3, 2, 1 ]

R.dropWhile(x => x !== 'd', 'ramda'); // da..
```



#### dropLastWhile

Excluding all the tailing elements which satisfies the predicate function

```js
const lteThree = R.lte(R.__, 3);

R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); // [1, 2, 3, 4]

R.dropLastWhile(x => x !== 'd', 'ramda'); // ramd
```



#### dropRepeatsWith

Returns a new array without consecutively repeating elements, the equality is determined by the **predicate function**, the **first elemen**t of equal elements will be **preserved**

```js
const arr = [1, -1, 2, -3, 3, -3];
R.dropRepeatsWith(R.eqBy(Math.abs), arr); // [ 1, 2, -3 ]
```



#### filter

Filter the input value with predicate function

```js
const isEven = n => n % 2 === 0;

R.filter(isEven, [1, 2, 3, 4]); // [ 2, 4 ]
R.filter(isEven, '1234'); // [ '2', '4' ]
R.filter(isEven, { a: 1, b: 2, c: 3, d: 4 }); // { b: 2, d: 4 }
```



#### reject

The complement of **filter**

```js
const isOdd = x => x % 2 === 1;
R.reject(isOdd, [1, 2, 3, 4]); // [ 2, 4 ]

const biggerThan5 = x => x > 5;
R.reject(biggerThan5, [1, 3, 5, 7, 9]); // 9
```



#### remove

Remove the sub-list starting at index **a** and containing **b** elements

```js
R.remove(2, 3, [1, 2, 3, 4, 5, 6, 7, 8]); // [ 1, 2, 6, 7, 8 ]
```



### 7. Find

#### find

Return the **first element** which matches the predicate function, or **undefined** if no one matches

```js
const people = [
  { name: 'Lily', age: 22 },
  { name: 'Tom', age: 33 },
  { name: 'John', age: 33 },
];

R.find(R.propEq('age', 33))(people); // { name: 'Tom', age: 33 }
R.find(R.propEq('age', 18))(people); // undefined
```



#### findIndex

Return the **index of first element** which matches the predicate function, or **-1** if no one matches

```js
const people = [
  { name: 'Lily', age: 22 },
  { name: 'Tom', age: 33 },
  { name: 'John', age: 33 },
];

R.findIndex(R.propEq('age', 33))(people); // 1
R.findIndex(R.propEq('age', 18))(people); // -1
```



#### findLast

Return the **last element** which matches the predicate function, or **undefined** if no one matches

```js
const people = [
  { name: 'Lily', age: 22 },
  { name: 'Tom', age: 33 },
  { name: 'John', age: 33 },
];

R.findLast(R.propEq('age', 33))(people); // { name: 'John', age: 33 }
R.findLast(R.propEq('age', 18))(people); // undefined
```



#### findLastIndex

Return the **index of last element** which matches the predicate function, or **-1** if no one matches

```js
const people = [
  { name: 'Lily', age: 22 },
  { name: 'Tom', age: 33 },
  { name: 'John', age: 33 },
];

R.findLastIndex(R.propEq('age', 33))(people); // 2
R.findLastIndex(R.propEq('age', 18))(people); // -1
```



#### head

Returns the **first** element of the array or string

```js
R.head(['foo', 'bar', 'baz']); // foo
R.head('abc') // a
```



#### last

Returns the **last** element of the array or string

```js
R.last(['fi', 'fo', 'fum']); // 'fum'
R.last([]); // undefined

R.last('abc'); // 'c'
R.last(''); // ''
```



#### nth

Returns the nth element of the given array or string

```js
const list = ['aa', 'bb', 'cc', 'dd'];
R.nth(2, list); // cc
R.nth(-1, list); // dd
R.nth(-88, list); // undefined

R.nth(2, 'abc') // c
R.nth(3, 'abc') // ''
```



#### indexOf

Returns the position of the **first** occurrence of an value in an array

```js
R.indexOf(3, [1,2,3,4]); // 2
R.indexOf(10, [1,2,3,4]); // -1
```



#### lastIndexOf

Returns the position of the **last** occurrence of an value in an array

```js
R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); // 6
R.lastIndexOf(10, [1,2,3,4]); // -1
```



#### length

Returns the number of elements in the array or string

```js
R.length([]); // 0
R.length([1, 2, 3]); // 3
R.length('1234') // 4
```



### 8. Composition

#### insert

Inserts **an element** into the **array** with a specified **index**

```js
R.insert(2, 'x', [1,2,3,4]); // [1,2,'x',3,4]
```



#### InsertAll

Inserts **an sub list** into the **array** with a specified **index**

```js
R.insertAll(2, ['x', 'y', 'z'], [1, 2, 3, 4]); // [ 1, 2, 'x', 'y', 'z', 3, 4 ]
```



#### intersperse

Inserts a member that represents a separator between array members

```js
R.intersperse('-', 'abc'); // [ 'a', '-', 'b', '-', 'c' ]
R.intersperse('-', ['x', 'y', 'z']); // [ 'x', '-', 'y', '-', 'z' ]
```



#### flatten

Flatten nested arrays

```js
R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] 
```



#### fromPairs

Convert a nested array to an object, If the key appears in multiple pairs, choose the rightmost one

```js
R.fromPairs([
  ['a', 1],
  ['b', 2],
  ['a', 3],
]); // { a: 3, b: 2 }
```



#### groupBy

Group array members according to a specific condition

```js
const byAge = R.groupBy(people => {
  const age = people.age;

  if (age < 30) return 'Young';
  if (age < 60) return 'Middle-age';
  return 'Old';
});

const people = [
  { name: 'Abby', age: 18 },
  { name: 'Eddy', age: 43 },
  { name: 'Jack', age: 74 },
  { name: 'Mike', age: 33 },
];

byAge(people);
//  {
//    Young: [{ name: 'Abby', age: 18 }],
//    'Middle-age': [
//      { name: 'Eddy', age: 43 },
//      { name: 'Mike', age: 33 },
//    ],
//    Old: [{ name: 'Jack', age: 74 }],
//  };
```



#### groupWith

Group the adjacent elements in an array if they meet the predicate function

```js
R.groupWith(R.equals, [0, 1, 1, 2, 3, 2]); // [ [ 0 ], [ 1, 1 ], [ 2 ], [ 3 ], [ 2 ] ]

R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 2]); // [ [ 0, 1 ], [ 1, 2, 3 ], [ 2 ] ]
```



#### indexBy

`(a → String) → [{k: v}] → {k: {k: v}}`

Turns a **list of objects** into an **object indexing the objects** by the given key

```js
const list = [
  { id: 'xyz', title: 'A' },
  { id: 'abc', title: 'B' },
];

R.indexBy(R.prop('id'), list);
// { xyz: { id: 'xyz', title: 'A' }, abc: { id: 'abc', title: 'B' } }
```



#### [into](https://ramdajs.com/docs/#into)

TODO: Don't understand this function

```js
TODO: To be added..
```



#### mapAccum

`((acc, x) → (acc, y)) → acc → [x] → (acc, [y])`

Behaves like combination of map and reduce

```js
const digits = [1, 2, 3, 4];
const alphabet = ['a', 'b', 'c'];

const appender = (a, b) => [b, a];

R.mapAccum(appender, 0, digits); // [ 4, [ 0, 1, 2, 3 ] ]
R.mapAccum(appender, '', alphabet); // [ '', [ 'a', 'b', 'c' ] ]
```



#### mapAccumRight

Similar to **mapAccum**,  but passing and returning the value in array **from right to left**

```js
const digits = [1, 2, 3, 4];
const alphabet = ['a', 'b', 'c'];

const appender = (a, b) => [a + b, a + b];

R.mapAccumRight(appender, 0, digits); // [ 10, [ 10, 9, 7, 4 ] ]
R.mapAccumRight(appender, '', alphabet); // [ 'cba', [ 'cba', 'cb', 'c' ] ]
```



#### pair

Take two arguments and return group them to an array

```js
R.pair('foo', 'bar'); // [ 'foo', 'bar' ]
```



#### partition

If the elements in the array satisfies the predicate function, take them into

```js
R.partition(x => x < 5, [1, 18, 6, 3, 10]); 
// [ [ 1, 3 ], [ 18, 6, 10 ] ]

R.partition(R.includes('s'), ['sss', 'ttt', 'foo', 'bars']); 
// [ [ 'sss', 'bars' ], [ 'ttt', 'foo' ] ]

R.partition(R.includes('s'), { a: 'sss', b: 'ttt', c: 'bars' }); 
// [ { a: 'sss', c: 'bars' }, { b: 'ttt' } ]
```



#### pluck

Returns a new array with **the value of a specified property**

```js
var getAges = R.pluck('age');
getAges([{name: 'fred', age: 29}, {name: 'wilma', age: 27}]); // [29, 27]

R.pluck(0, [[1, 2], [3, 4]]);               // [1, 3]
R.pluck('val', {a: {val: 3}, b: {val: 5}}); // {a: 3, b: 5}
```



#### range

Returns an array of numbers from `a` to `b`

```js
R.range(1, 5); // [ 1, 2, 3, 4 ]
R.range(97, 101); // [ 97, 98, 99, 100 ]
```



#### reduce

Array members executes the function in turn, and each result will be the cumulative variable

```js
R.reduce(R.subtract, 0, [1, 2, 3]); // -6
// 0 - 1 = -1;
// -1 - 2 = -3;
// -3 - 3 = -6;
```



#### reduceRight

Array members executes the function in turn from right to left, and the **accumulated result** will put **on the right side** of the executing function

```js
R.reduceRight(R.subtract, 0, [1, 3, 7]); // 5
// 7 - 0 = 7;
// 3 - 7 = -4;
// 1 - (-4) = 5;


R.reduceRight(R.concat, '-', ['a', 'b', 'c']); // abc-
// 'c' + '-' = 'c-';
// 'b' + 'c-' = 'bc-';
// 'a' + 'bc-' = 'abc-';
```



#### reduceWhile

Similar to reduce when the element in array satisfies the predicate function 

```js
const arr = [1, 3, 5, 8, 9];

const isOdd = (acc, x) => x % 2 === 1;
R.reduceWhile(isOdd, R.add, 0, arr); // 9

const smallerThan5 = (acc, x) => x < 5;
R.reduceWhile(smallerThan5, R.multiply, 1, arr); // 3
```



#### scan

Similar to reduce, but group the successively reduced values into an array

```js
const numbers = [3, 4, 5];
R.scan(R.multiply, 1, numbers); // [ 1, 3, 12, 60 ]
```



#### repeat

Repeat the element's identical value **n** times and put it into an array

```js
R.repeat('hi', 5); // [ 'hi', 'hi', 'hi', 'hi', 'hi' ]

const jack = { name: 'Jack' };
const repeatJack = R.repeat(jack, 3);
// [ { name: 'Jack' }, { name: 'Jack' }, { name: 'Jack' } ]

repeatJack[0] === repeatJack[2]; // true
```



#### splitAt

Split a given array by a given index

```js
R.splitAt(1, [1, 2, 3]); // [ [ 1 ], [ 2, 3 ] ]
R.splitAt(-1, 'foobar'); // [ 'fooba', 'r' ]
```



#### splitEvery

Splits the original array into multiple parts according to the specified number

```js
R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); 
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]

R.splitEvery(3, 'foobarbaz'); 
// [ 'foo', 'bar', 'baz' ]
```



#### splitWhen

Splits an array into two parts when a member satisfies the predicate function

```js
R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]); // [[1], [2, 3, 1, 2, 3]]
```





### 9. Traversal

#### forEach

Each members in the array executes a function in turn, and it will always returns the **original array**

```js
const printXPlusFive = x => console.log(x + 5);
R.forEach(printXPlusFive, [1, 2, 3]); // [ 1, 2, 3 ]
// logs 6
// logs 7
// logs 8
```



#### map

Each members in the array executes a function in turn, and returns the result

```js
const double = x => x * 2;

R.map(double, [1, 2, 3]); // [2, 4, 6]

R.map(double, {x: 1, y: 2, z: 3}); // {x: 2, y: 4, z: 6}
```



### 10. Sort

#### sort

Sort an array according to the comparator function

```js
const diff = (a, b) => a - b;

R.sort(diff, [4, 2, 7, 5]); // [2, 4, 5, 7]
```



#### reverse

Reverse the elements in an array or string

```js
R.reverse([1, 2, 3]); // [ 3, 2, 1 ]
R.reverse('abc'); // cba
```



#### move

Move a item in an array from index **a** to index **b**

```js
R.move(0, 2, ['a', 'b', 'c', 'd', 'e', 'f']); // [ 'b', 'c', 'a', 'd', 'e', 'f' ]
R.move(-1, 0, ['a', 'b', 'c', 'd', 'e', 'f']); // [ 'f', 'a', 'b', 'c', 'd', 'e' ]
```



## 4. Object

## 5. Function

## 6. Relation

#### max

Returns the larger one of two arguments

```js
R.max(789, 123); // 789
R.max('a', 'b'); // 'b'
```



#### maxBy

Take the **function** and **two values**, returns the **value** which gets the **larger** result after they passed to the function

```js
const square = n => n * n;

R.maxBy(square, -3, 2); // -3

R.reduce(R.maxBy(square), 0, [3, -5, 2, -3, 4]); // -5
```



#### min

Returns the smaller one of two arguments

```js
R.min(789, 123); // 123
R.min('a', 'b'); // 'a'
```



#### minBy

Take the **function** and **two values**, returns the **value** which gets the **smaller** result after they passed to the function

```js
const square = n => n * n;

R.minBy(square, -3, 2); // 2

R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); // 1
R.reduce(R.minBy(square), Infinity, []); // Infinity
```



#### gt

Returns **true** if the first argument is greater than the second

```js
R.gt(2, 1); // true
R.gt(2, 2); // false
R.gt(2, 3); // false
R.gt('a', 'z'); // false
R.gt('z', 'a'); // true
```



#### gte

Returns **true** if the first argument is greater than or equal to the second

```js
R.gte(2, 1); // true
R.gte(2, 2); // true
R.gte(2, 3); // false
R.gte('a', 'z'); // false
R.gte('z', 'a'); // true
```



#### lt

Returns **true** if the first arguments is less than the second

```js
R.lt(2, 1); // false
R.lt(2, 2); // false
R.lt(2, 3); // true
R.lt('a', 'z'); // true
R.lt('z', 'a'); // false
```



#### lte

Returns **true** if the first arguments is less than or equal to the second

```js
R.lte(2, 1); // false
R.lte(2, 2); // true
R.lte(2, 3); // true
R.lte('a', 'z'); // true
R.lte('z', 'a'); // false
```



#### equals

Compares if two values are equal

```js
R.equals(1, 1); // true
R.equals(1, '1'); // false
R.equals([1, 2, 3], [1, 2, 3]); // true
R.equals({ a: 1 }, { a: 1 }); // true
```



#### eqBy

Compares whether the operation results of two values are equal

```js
R.eqBy(Math.abs, 5, -5); // true

R.eqBy(Math.round, 0.5, 1.4); // true

R.eqBy(R.mean, [3, 5], [1, 4, 7]); // true

R.eqBy(R.sum, [3, 4, 5], [12]); // true

R.eqBy(R.head, 'ally', ['a', 'b', 'c']); // true
```



#### difference

Finds the set of all elements in the fist array not contained in the second array

```js
R.difference([1, 2, 3, 4], [3, 4, 5, 6]); // [ 1, 2 ]
R.difference([{ a: 1 }, { b: 2 }], [{ b: 2 }, { c: 3 }]); // [ { a: 1 } ]
```



#### differenceWith

Return all elements in the first array that do not meet the criteria function

```js
let sameAge = (x, y) =>  x.age === y.age;

var students1 = [
  { name: 'John', age: 18 },
  { name: 'jack', age: 15 },
];

var students2 = [
  { name: 'Billy', age: 18 },
  { name: 'Mike', age: 20 },
];

R.differenceWith(sameAge, students1, students2); // [ { name: 'jack', age: 15 } ]
```



#### symmetricDifference

Return an new array consisting of non-shared members of two arrays

```js
R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); // [1,2,7,6,5]
R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); // [7,6,5,1,2]
```



#### symmetricDifferenceWith

Return an new array consisting of members of two arrays that have unequal results after the given function operation

```js
let sameAge = (x, y) =>  x.age === y.age;

var students1 = [
  { name: 'John', age: 18 },
  { name: 'jack', age: 15 },
];

var students2 = [
  { name: 'Billy', age: 18 },
  { name: 'Mike', age: 20 },
];

R.symmetricDifferenceWith(sameAge, students1, students2); // [ { name: 'jack', age: 15 }, { name: 'Mike', age: 20 } ]
```



#### clamp

Restricts a **number, string or Dates** to be within a range

```js
R.clamp(4,8,6); // 6
R.clamp(4,8,1); // 4
R.clamp(4,8,15); // 8

R.clamp('c', 'f', 'd') // d
R.clamp('c', 'f', 'a') // c
```



#### countBy

Counts the elements of a list by the supplied function and returns a mapping object

```js
const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
R.countBy(Math.floor)(numbers);    // {'1': 3, '2': 2, '3': 1}

const letters = ['a', 'b', 'A', ' a ', 'B', 'c'];
R.countBy(R.map(R.trim, R.toLower))(letters); // {'a': 3, 'b': 2, 'c': 1}
```



#### identical

Returns **true** if two value reference the same memory

```js
const o = {};
R.identical(o, o); // true
R.identical(1, 1); // true
R.identical(1, '1'); // false
R.identical([], []); // false
R.identical(0, -0); // false
R.identical(NaN, NaN); // true
```



#### innerJoin

`((a, b) → Boolean) → [a] → [b] → [a]`

Takes a **predicate**, an **array x**, an **array y**,  **predicate** must be a **binary function** expecting an element from each array, return the **element in array x** and push it into an new array if the two elements meet the condition

```js
R.innerJoin(
  (person, age) => person.age === age,
  [
    { name: 'Jane', age: 22 },
    { name: 'Tom', age: 18 },
    { name: 'Billy', age: 22 },
    { name: 'Olive', age: 31 },
  ],
  [18, 22]
); // [ { name: 'Jane', age: 22 }, { name: 'Tom', age: 18 }, { name: 'Billy', age: 22 } ]
```



#### intersection

Return a new array consisting of the same members of two arrays

```js
R.intersection([1,2,3,4], [7,6,5,4,3]); // [4, 3]
```



#### pathEq

Returns true if **a nested path on a object** has **a specific value**

```js
const user1 = { address: { zipCode: 90210 } };
const user2 = { address: { zipCode: 55555 } };
const user3 = { name: 'Bob' };
const users = [user1, user2, user3];
const isFamous = R.pathEq(['address', 'zipCode'], 90210);

isFamous(user1); // true
isFamous(user2); // false

R.filter(isFamous, users); // [ user1 ]
```



#### propEq

Returns true if the property in an object is equal to the given value

```js
const abby = { name: 'Abby', age: 7, hair: 'blond' };
const fred = { name: 'Fred', age: 12, hair: 'brown' };
const rusty = { name: 'Rusty', age: 10, hair: 'brown' };
const alois = { name: 'Alois', age: 15, disposition: 'surly' };
const kids = [abby, fred, rusty, alois];
const hasBrownHair = R.propEq('hair', 'brown');

hasBrownHair(abby); // false
hasBrownHair(fred); // true

R.filter(hasBrownHair, kids); // [fred, rusty]
```



#### sortBy

Sorts the list according the supplied function

```js
sortBy(x => x, [2, 1, 22, 3, 11, -1, -22]); // [ -22, -1, 1, 2, 3, 11, 22 ] 

const sortByFirstItem = R.sortBy(R.prop(0));
const pairs = [
  [-2, 2],
  [-1, 1],
  [-3, 3],
];
sortByFirstItem(pairs); // [ [ -3, 3 ], [ -2, 2 ], [ -1, 1 ] ] 

const sortByNameCaseInsensitive = R.sortBy(
  R.compose(R.toLower, R.prop('name'))
);
const alice = {
  name: 'ALICE',
  age: 101,
};
const bob = {
  name: 'Bob',
  age: -10,
};
const clara = {
  name: 'clara',
  age: 314.159,
};
const people = [clara, bob, alice];
sortByNameCaseInsensitive(people); // [alice, bob, clara]
```



#### sortWith

Sorts an array according to a set of functions

```js
const alice = {
  name: 'alice',
  age: 40,
};
const bob = {
  name: 'bob',
  age: 30,
};
const clara = {
  name: 'clara',
  age: 40,
};
const people = [clara, bob, alice];

const ageNameSort = R.sortWith([
  R.ascend(R.prop('age')),
  R.descend(R.prop('name')),
]);

ageNameSort(people); // [bob, clara, alice]
```



#### union

Combines two arrays into a set

```js
R.union([1, 2, 3], [2, 3, 4]); // [ 1, 2, 3, 4 ]

R.union(
  [{ name: 'Lily' }, { name: 'John' }],
  [{ name: 'Lily' }, { name: 'Olive' }]
); // [ { name: 'Lily' }, { name: 'John' }, { name: 'Olive' } ]
```



#### [unionWith](https://ramdajs.com/docs/#unionWith)

TODO: Don't understand this function

```js
TODO: To be added..
```



## 7. Logic

#### allPass

Return **true**  when the **second argument** meet all the criteria in the **function array** as the first argument

```js
const isBoy = R.propEq('gender', 'boy');
const isCasher = R.propEq('career', 'casher');
const isBoyCasher = R.allPass([isBoy, isCasher]);

const Mike = { name: 'Mike', gender: 'boy', career: 'casher' };
const Jack = { name: 'Jack', gender: 'boy', career: 'doctor' };
const Thomas = { name: 'Thomas', gender: 'boy', career: 'casher' };
const Maria = { name: 'Maria', gender: 'girl', career: 'casher' };

isBoyCasher(Mike); // true
isBoyCasher(Jack); // false
isBoyCasher(Thomas); // true
isBoyCasher(Maria); // false

R.filter(isBoyCasher, [Mike, Jack, Thomas, Maria]); // [Mike, Thomas]
```



#### and

Return true if both arguments are true

```js
R.and(true, true); // true
R.and(true, false); // false
R.and(5 > 2, 3 < 1); // false
```



#### anyPass

Return **true**  when the **second argument** meet any of the criteria in the **function array** as the first argument

```js
const isBoy = R.propEq('gender', 'boy');
const isCasher = R.propEq('career', 'casher');
const isBoyOrCasher = R.anyPass([isBoy, isCasher]);

const Mike = { name: 'Mike', gender: 'boy', career: 'casher' };
const Jack = { name: 'Jack', gender: 'boy', career: 'doctor' };
const Thomas = { name: 'Thomas', gender: 'boy', career: 'casher' };
const Maria = { name: 'Maria', gender: 'girl', career: 'casher' };
const Lily = { name: 'Maria', gender: 'girl', career: 'doctor' };

isBoyOrCasher(Mike); // true
isBoyOrCasher(Jack); // true
isBoyOrCasher(Thomas); // true
isBoyOrCasher(Maria); // true
isBoyOrCasher(Lily); // false
```



#### both

Return **true** if the third parameters **both meets the criteria** of  first two functions, otherwise return false

```js
const gt10 = x => x > 10;
const isEven = x => x % 2 === 0;

const f = R.both(gt10, isEven);

f(15); // false
f(14); // true
```



#### complement

Returns a new function, it will return **false** if the **original function** returns **true**, return **true** if the **original function** returns **false**,

```js
const gt10 = x => x > 10;
const lte10 = R.complement(gt10);

lte10(7); // true
lte10(11); // false
```



#### cond

Takes an array of **[predicate, transformer] pairs**, the second argument **applied to each of predicates**, if returns the 'truthy' value, then stop and active the **current transformer**

```js
const fn = R.cond([
  [R.lt(R.__, 18), R.always('Too young')],
  [R.gt(R.__, 60), R.always('Too old')],
  [R.T, temp => 'Appropriate age'],
]);

fn(11); // Too young
fn(22); // Appropriate age
fn(89); // Too old 
```



#### defaultTo

Return the second value if it's not **null, undefined, or NaN**, otherwise return the **first argument**

```js
const defaultTo42 = R.defaultTo(42);

defaultTo42(null); // 42
defaultTo42(undefined); // 42
defaultTo42(false); // false
defaultTo42('Ramda'); // 'Ramda'

// parseInt('string') results in NaN
defaultTo42(parseInt('string')); // 42
```



#### either

Return true if the third parameter meets any of first two criteria, otherwise return false

```js
const gt10 = x => x > 10;
const even = x => x % 2 === 0;
const f = R.either(gt10, even);

f(101); // true
f(8); // true
```



#### [ifElse](https://ramdajs.com/docs/#ifElse)

TODO: Don't understand this function

```js
TODO: To be added..
```



#### isEmpty

Returns true if the parameter is empty

```js
R.isEmpty([1, 2, 3]); // false
R.isEmpty([]); // true
R.isEmpty(''); // true
R.isEmpty(null); // false
R.isEmpty({}); // true
R.isEmpty({ length: 0 }); // false
R.isEmpty(0); // false
```



#### not

Return the **!** of it's argument

```js
R.not(true); // false
R.not(false); // true
R.not(0); // true
R.not(1); // false
R.not(NaN); // true
```



#### or

Return true if **one or both** of it arguments are true

```js
R.or(true, true); // true
R.or(true, false); // true
R.or(false, true); // true
R.or(false, false); // false
```



#### pathSatisfies

Returns true if the **object property** at **given path** satisfies the given **predicate function**

```js
R.pathSatisfies(el => el > 0, ['x', 'y'], { x: { y: 2 } }); // true
R.pathSatisfies(R.is(Object), [], { x: { y: 2 } }); // true
```



#### propSatisfies

Returns true if the **specific object property** satisfies the given **predicate function**

```js
R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); // true
```



#### unless

**Return itself** if satisfies the **first predicate function**, otherwise return the result of calling the second function

```js
const bonusScore = R.unless(R.lte(60), R.inc);

bonusScore(88); // 88
bonusScore(59); // 60
```



#### until

Applying the **transformation function** until the **third argument** satisfies the **predicate function**

```js
R.until(R.gt(R.__, 100), R.multiply(2))(1); // 128
```



#### when

**Return itself** if not satisfies the **first predicate function**, otherwise return the result of calling the second function

```js
const truncate = R.when(
  R.propSatisfies(R.gt(R.__, 10), 'length'),
  R.pipe(R.take(10), R.append('...'), R.join(''))
);

truncate('12345'); // 12345
truncate('0123465789abc'); // 0123465789...
```



#### xor

Returns true if one of the arguments is truthy and the other is falsy; Return false otherwise

```js
R.xor(true, true); // false
R.xor(true, false); // true
R.xor(false, true); // true
R.xor(false, false); // false
```



## 8. Types

#### type

Check the type of a given value

```js
R.type({}); // "Object"
R.type(1); // "Number"
R.type(false); // "Boolean"
R.type('s'); // "String"
R.type(null); // "Null"
R.type([]); // "Array"
R.type(/[A-z]/); // "RegExp"
R.type(() => {}); // "Function"
R.type(undefined); // "Undefined"
```



#### is

Check if an value is an instance of the supplied constructor

```js
R.is(Object, {}); // true
R.is(Number, 1); // true
R.is(Object, 1); // false
R.is(String, 's'); // true
R.is(String, new String('')); // true
R.is(Object, new String('')); // true
R.is(Object, 's'); // false
R.is(Number, {}); // false
```



#### isNil

Check if an value is **null** or **undefined**

```js
R.isNil(null); // true
R.isNil(undefined); // true
R.isNil(0); // false
R.isNil([]); // false
R.isNil('') // false
```



#### propIs

Check if the **specified object property** is of the given type

```js
R.propIs(Number, 'x', {x: 1, y: 2});  // true
R.propIs(Number, 'x', {x: 'foo'});    // false
R.propIs(Number, 'x', {});            // false
```