# 集合
集合由无序且唯一的项组成，集合中对象由 `{}` 表示。



## 实现一个集合

创建一个集合类

```js
// 创建一个集合类
function Set() {
  this.items = {};

  // 先实现 has 方法，因为他会被 add, remove 等方法调用
  this.has = function(value) {
    return this.items.hasOwnProperty(value);
  }

  // 实现 add 方法
  this.add = function(value) {
    if(!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }

  // 实现 remove 方法
  this.remove = function(value) {
    if(this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }

  // 实现 clear 方法
  this.clear = function() {
    // 赋值空对象给 item 实现清空集合
    this.items = {};
  };

  // 实现 size 方法
  // es5 自带方法
  this.size = function() {
    return Object.keys(this.items).length;
  }

  // 通用方法
  this.size2 = function() {
    var count = 0;
    for(var prop in this.items) {
      if(this.items.hasOwnProperty(prop)) {
        ++count;
      }
    }
    return count;
  }

  // 实现 value 方法
  // es5 自带方法
  this.values = function() {
    return Object.keys(this.items);
  }

  // 通用方法
  this.values2 = function() {
    var valueArr = [];
    for(var key in this.items) {
      valueArr.push(key);
    }
    return valueArr;
  }

  // 实现集合的一些基本操作
  // 并集, x 存在于集合A中或存在与集合B中。
  this.union = function(otherSet) {
    // 创建并集
    var unionSet = new Set();

    // 循环遍历当前集合的值，添加到并集中
    var values = this.values();
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    // 循环遍历另一集合的值，添加到并集中
    values = otherSet.values();
    for (var i = 0; i< values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  }

  // 交集，x 存在于集合A中，且存在与集合B中。
  this.intersection = function(otherSet) {
    // 创建交集
    var intersectionSet = new Set();

    // 循环遍历当前集合的值，如果有值在另一集合里也存在，就添加到交集中。
    var values = this.values();
    for(var i = 0; i < values.length; i++) {
      if( otherSet.has(values[i]) ) {
        intersectionSet.add(values[i]);
      }
    }

    return intersectionSet;
  }

  // 差集，x 存在于集合A中，不存在于集合B中。
  this.difference = function(otherSet) {
    // 创建差集
    var differenceSet = new Set();

    var values = this.values();
    for(var i = 0; i < values.length; i++) {
      if(!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }

    return differenceSet;
  }

  // 子集，集合A中的每一个元素都需要存在与集合B中。
  this.subset = function(otherSet) {
    // 创建子集
    var subset = new Set();

    // 集合A的数量必须小于或等于集合B的数量
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      // 遍历集合A，如果存在集合B没有的。那么就返回 false;
      var values = this.values();
      for(var i = 0; i < values.length; i++) {
        if(!otherSet.has(values[i])) {
          return false;
        }
      }

      return true;
    }
  }
}
```

