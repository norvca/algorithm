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

