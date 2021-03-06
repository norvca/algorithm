## Navigation
[1. Arithmetic operation](#1-arithmetic-operation)

[2. String operation](#2-string-operation)

[3. List operation](#3-list-operation)

	- merge
	- remove
	- sort
	- replace

## 1. Arithmetic operation

### add

Add two numbers

```js
R.add(1, 2); // 3

const plus10 = R.add(10);
plus10(5) // 15
```



### subtract

Subtract two numbers

```js
R.subtract(10, 8); // 2

const minus5 = R.subtract(R.__, 5);
minus5(17); // 12

const complementaryAngle = R.subtract(90);
complementaryAngle(30); // 60
complementaryAngle(72); // 18
```



### multiply

Multiplies two numbers

```js
R.multiply(2, 5);  // 10

const double = R.multiply(2);
const triple = R.multiply(3);
double(3); // 6
triple(4); // 12
```



### divide

Divides two numbers

```js
R.divide(4, 2); // 2

const half = R.divide(R.__, 2);
half(20); // 10

const reciprocal = R.divide(1, R.__);
reciprocal(5) // 0.2
```



### sum

Adds together all the elements of a list

```js
R.sum([1,3,5,7,9]); // 25
```



### product

Multiplies together all the elements of a list

```js
R.product([2,4,6,8,100,1]); // 38400
```



### negate

Negates its argument

```js
R.negate(42); // -42
```



### dec

Decrements its argument

```js
R.dec(42); // 41
```



### inc

Increments its argument.

```js
R.inc(42); // 43
```



### modulo

Divides the first parameter by the second and returns the remainder

```js
R.modulo(17, 3); // 2
R.modulo(-17, 3); // -2
R.modulo(17, -3); // 2

const isOdd = R.modulo(R.__, 2);
isOdd(42); // 0
isOdd(21); // 1
```



### mathMod

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



### mean

Returns the mean of the given list of numbers

```js
R.mean([2, 7, 9]); // 6
R.mean([]); // NaN
```



### median

Returns the median of the given list of numbers

```js
R.median([2, 9, 7]); // 7
R.median([7, 2, 10, 9]); // 8
R.median([]); // NaN
```



## 2. String operation

### toLower

Turn a string to lowercase

```js
R.toLower('ABC.123'); // 'abc.123'
```



### toUpper

Turn a string to uppercase

```js
R.toUpper('abc.123'); // 'ABC.123'
```



### toString

`* → String`

Returns the **string representation** of the given value

```js
R.toString(42); // '42'
R.toString('abc'); // '"abc"'
R.toString([1, 2, 3]); // '[1, 2, 3]'
R.toString({foo: 1, bar: 2, baz: 3}); // '{"bar": 2, "baz": 3, "foo": 1}'
R.toString(new Date('2001-02-03T04:05:06Z')); // 'new Date("2001-02-03T04:05:06.000Z")'
```



### trim

Removes whitespace from both ends of  the **string;**

```js
R.trim('  a bc     ') // 'a bc'
R.map(R.trim,R.split(',', 'x,y , z ')) //['x', 'y', 'z']
```



### replace

Replace a **substring** or **regex** match in a **string**

```js
R.replace('foo', 'bar', 'foo foo foo');  // 'bar foo foo'
R.replace(/foo/, 'bar', 'foo foo foo');  // 'bar foo foo'
R.replace(/foo/g, 'bar', 'foo foo foo'); // 'bar bar bar'
```



### split

Splits a **string**  into an **array of strings**

```js
R.split('.', 'a.b.cd.efg'); // ['a', 'b', 'cd', 'efg'] 

const pathComponents = R.split('/');
R.tail(pathComponents('/usr/local/bin/node')) // ['usr', 'local', 'bin', 'node'] 
```



### match

Test  **regular expression** against a **string**, return **empty array** when there are no match

```js
R.match(/[a-z]a/g, 'banana'); // ['ba', 'na', 'na']
R.match(/a/, 'b'); // []
R.match(/a/, 1); // 1 does not have a method named "match"
```



### test

Determines whether a given **string** matches a given **regular expression**

```js
R.test(/z$/, 'xyz') // true
R.test(/^z/, 'xyz') // false
```



## 3. Decorative operation

### addIndex



### adjust

Apply a function to the value at the given index of an array, return a new copy of the result

```js
R.adjust(1, R.toUpper, ['a', 'b', 3, 'd']); // [ 'a', 'B', 3, 'd' ]
R.adjust(-2, R.add(1), ['a', 'b', 3, 'd']); // [ 'a', 'b', 4, 'd' ] 
```

