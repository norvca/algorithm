## Navigation
[1. Arithmetic operations](#1-arithmetic-operations)

[2. String operations](#2-string-operations)

[3. List operations](#3-list-operations)

- merge
- remove
- sort
- replace

[4. Object operations](#4-object-operations)

[5. Function operations](#5-function-operations)

[6. Relation operations](#6-relation-operations)

[7. Logic operations](#7-logic-operations)

[8. Types](#8-types)



## 1. Arithmetic operations
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



## 2. String operations

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



## 3. List operations

#### adjust

Apply a function to the value at the given index of an array, return a new copy of the result

```js
R.adjust(1, R.toUpper, ['a', 'b', 3, 'd']); // [ 'a', 'B', 3, 'd' ]
R.adjust(-2, R.add(1), ['a', 'b', 3, 'd']); // [ 'a', 'b', 4, 'd' ] 
```



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







## 4. Object operations

## 5. Function operations

## 6. Relation operations

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



#### unionWith

TODO: Don't understand this function

```js
TODO: To be added..
```



## 7. Logic operations

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



#### ifElse

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