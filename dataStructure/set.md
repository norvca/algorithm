# 集合
集合由无序且唯一的项组成，集合中对象由 `{}` 表示。



## 实现一个集合

创建一个集合类

```js
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
}
```

