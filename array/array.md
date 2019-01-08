# 数组基础
数组是最简单的内存数据结构，进行 JS 开发时经常会用到，这是基础中的基础。

在学习时可以根据其特点进行分类记忆。

## 对象继承方法

数组是对象，自然会继承对象的 toString()、valueOf() 等方法。

### toString()

方法返回数组中每个值以字符串形式拼接而成的新字符串。

```js
[1,2,3,["a","b","c"]].toString();  // "1,2,3,a,b,c"
```



`alert()` 功能要接收字符串参数，所以他调用`toString()` 方法把传入的参数转换为字符串。

```js
alert([1,2,3,["a","b","c"]]) // 弹出 "1,2,3,a,b,c"
```



### valueOf()

该方法会返回数组对象本省

```js
var a = [1,2,3,["a","b","c"]];
var b = a.valueOf();
a === b // true
```



## 数组转换方法

### join()

`Array.join`是 `String.split()` 的逆操作，后者将字符串分割成若干块来创建一个数组。

和  `toString() ` 不同的是 `join() ` 方法可以将数组以不同的分割符来构建字符串，默认为逗号分割符。

```js
[1,2,3,["a","b","c"],4,5,6].join(); // "1,2,3,a,b,c,4,5,6"
[1,2,3,["a","b","c"],4,5,6].join("~"); // "1~2~3~a,b,c~4~5~6"
```

> 该方法也用于类数组对象
>
> ```js
> Array.prototype.join.call('hello', "-"); // "h-e-l-l-o"
> ```



## 栈和队列方法

栈：: 后进先出（LIFO）， 利用 push() 和 pop() 方法

队列：先进先出（FIFO），结合 shift() 和 push() 方法

### push()

该方法接收任意数量参数，添加到数组末尾，并返回修改后数组的长度。`push()`方法会改变原数组。

```js
var a =[];
console.log(a,a.push(1));//[1] 1
console.log(a,a.push('a'));//[1,'a'] 2
console.log(a,a.push(true, {}));//[1,'a',true,{}] 4
```

### pop()

该方法移除数组末尾项，返回移除的项。`pop()`方法会改变原数组。

```js
var a = ['a', 'b', 'c'];
console.log(a,a.pop()); // ['a', 'b'] 'c'
```

### shift()

该方法移除数组第一项，返回该项。 `shift()`方法会改变原数组。

### unshift()

该方法接收任意数量参数，添加到数组头部，并返回修改后数组的长度。`unshift()`方法会改变原数组。

```js
var a = ['a', 'b', 'c'];
console.log(a,a.unshift('x')); //['x', 'a', 'b', 'c'] 4
```



## 数组排序方法

数组中有两个重排序方法：`reserve()` 和 `sort()`

### reserve()

反转数组的顺序，返回重排后的数组。 `reserve() ` 方法会改变数组。

```js
var array = [1,2,4,3,5];
console.log(array,array.reverse());//[5,3,4,2,1] [5,3,4,2,1]
```

## sort()

该方法调用数组项的 `toString()`方法，然后比较得到的字符串，按升序重排数组，返回重排后的数组。`sort()`方法会改变出租，

```js
var array = [1,5,10,undefined,50];
console.log(array,array.sort());//[1, 10, 5, 50,undefined] [1, 10, 5, 50,undefined]
```

`sort()`可以接受一个函数作为比较函数进行排序， __原理目前不太清楚，待解决.__

```js
var array = ['5px',50,1,undefined,10];
array.sort(function(a,b){
    return a-b;
})
// ["5px", 1, 10, 50, undefined]
// 数则包含 undefined ，他会被排到数组的尾部。
//当数字与字符串比较大小时，字符串'5px'会被转换成NaN，这样结果就是false
```

利用`sort()`方法对数组进行随机排序

```js
function compare(){
    return Math.random() - 0.5;
}
var array = [1,2,3,4,5];
console.log(array.sort(compare));//[2,1,5,4,3]
```



## 数组拼接方法

### concat()

`concat()  `先基于当前数组项创建自身副本，然后将参数添加到这个数组的末尾，返回新数组。所以 `concat()`不会改变原数组。

```js
var numbers = [1,2];
console.log(numbers,numbers.concat(3,4));//[1,2] [1,2,3,4]
```



利用 `call()` 方法将对象拼接为数组。

```js
Array.prototype.concat.call({a:1}, {b:2}) // [{ a: 1 }, { b: 2 }]
```



## 创建子数组方法

### slice

`slice()`基于当前数组创建一个或多个项创建新数组，接收一个或两个参数，即要返回的起始和结束位置，最后返回新数组，`slice()`不影响原数组。

```js
var a = [1,2,3,4,5]
console.log(a, a.slice(3)) // [1, 2, 3, 4, 5]   [4, 5]

console.log(a, a.slice(2,3)) // [1, 2, 3, 4, 5] [3]

console.log(a.slice(0,-3));//-3+5=2 -> [1,2]

console.log(a.slice(-2,-1));//-2+5=3;-1+5=4; -> [4]
```


### splice

该方法用于删除原一部分数组，并可以在删除位置加入新成员，该方法会改变原数组。

只有一个参数时在指定位置分割原数组。

```js
var a = [1,2,3,4,5,6,7,8]
console.log(a, a.splice(4)) // [1, 2, 3, 4] [5, 6, 7, 8]
```

有两个参数时可以指定拆分个数。

```js
var a = [1,2,3,4,5,6,7,8]
console.log(a, a.splice(4, 2)) // [1, 2, 3, 4, 7, 8] [5, 6]
```

如果有更多参数，那这些就是要被插入数组的新元素。

```js
var a = [1,2,3,4,5,6,7,8]
console.log(a, a.splice(4, 2,['新加1','新加2'], '新加3')) // [1, 2, 3, 4, ["新加1", "新加2"], "新加3", 7, 8] [5, 6]
```



## 数组位置方法

### index() 

返回 参数首次出现在数组的位置，没有找到返回 -1

```js
var a  =[1,2,3,"1","2","3"]
a.indexOf(2) // 1
a.indexOf("2") // 4=
a.indexOf(4) // -1
```



## 数组归并方法

### reduce()

能将数组组合，形成单个值。接受两个参数，第一个是简化函数，第二个是初始值。

简化函数包含四个值: pre(初始变量), cur(当前变量), idx(当前变量索引), arr(数组本身)

```js
var a = [1,2,3,4]
a.reduce(function(pre, cur){
	return pre+cur;
}, 5) // 15
```



## 数组迭代方法

数组迭代方法大多以这样的函数作为参数，该函数又有三个参数

数组项值， 值的索引， 数组本身

```js
function(item, index, arr){
    // todo...
}
```

### map()

该方法对数组的每一项都运行给定函数，返回一个函数调用后的新数组。

```js
[1,2,3].map(function(item, index, arr){
	return item+item;
}) // [2,4,6]
```



### forEach()

该方法运行对数组每一项都运行给定函数，但没有返回值，本质和 for循环 遍历数组一样。

```js
var a =2;

[2,3,4].forEach(function(item){
	a += item;
})

console.log(a) // 11
```

### find()
find 循环遍历一个数组，然后返回一个新数组，当旧数组项符合给定函数时则会被添加到返回的新数组里，循环结束。
```js
var students = [{name: 'Tom', age: 15}, {name: 'Jane', age: 8}, {name: 'Oliva', age: 10}];

students.find(function(student) {
	return student.age === 10;
}) // {name: "Oliva", age: 10}
```


### filter()

该方法运行对数组每一项都运行给定函数,返回结果为 true 的项组成的函数。

```js
[1,2,3,4,5,6].filter(function(item){
	return item>=3;
}) // [3, 4, 5, 6]
```



### some()

该方法运行对数组每一项都运行给定函数， 有任一项返回 true ，则返回 true。全项返回 false，则返回 false。

```js
[1,2,3,4,5,6].some(function(item){
	return item < 3;
}) // true


[1,2,3,4,5,6].some(function(item){
	return item > 7;
}) // false
```



### every()

该方法运行对数组每一项都运行给定函数， 有任一项返回 false，则返回 false。全项返回 true，则返回 true。

```js
[1,2,3,4,5,6].every(function(item){
	return item > 0;
}) // true

[1,2,3,4,5,6].every(function(item){
	return item > 1;
}) // false
```



## 对原数组的影响

能改变原数组的方法有:

栈和队列方法： `unshift()`、`shift()`、`pop()`、`push()`

数组排列方法： `reserve()`、 `sort()`

数组删改方法： `splice()`





参考链接: <http://www.cnblogs.com/xiaohuochai/p/5682621.html>
