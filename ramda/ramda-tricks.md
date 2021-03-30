#### Pick values a from list by indexes

```js
R.props([0, 2], ['a', 'b', 'c']); // [ 'a', 'c' ]
```

#### Get n function calls as an array

```js
const getRandomIntegerBelowTen = R.pipe(Math.random, R.multiply(10), Math.ceil);

R.times(getRandomIntegerBelowTen, 5);
// A possible result: [ 7, 9, 1, 7, 8 ]
```

#### Get an object's method names
```js
const obj = {
  a: 1,
  b: true,
  foo: function () {},
  bar: function () {},
};

const getMethodNames = R.compose(R.keys, R.pickBy(R.is(Function)));
getMethodNames(obj); // [ 'foo', 'bar' ]
```

