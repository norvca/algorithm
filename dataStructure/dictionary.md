# 字典
字典由不重复的元素组成，字典中对象由 `{}` 表示，以{键: 值}的形式来存储。



## 实现一个字典

```js
// 创建一个字典类
function Dictionary() {
  this.items = {};

  // 实现 has 方法，这是实现 remove 方法的前提
  this.has = function(key) {
    return key in this.items;
  }

  // 实现 set 方法，向字典里添加元素
  this.set = function(key, value) {
    this.items[key] = value;
  }

  // 实现 remove 方法，向字典里移除元素
  this.remove = function(key) {
    if(this.has(key)) {
      delete this.items[key];
      return true;
    }
    return false;
  }

  // 实现 get 方法，在字典里查找特定项，并获取它的值。
  this.get = function(key) {
    return this.has(key) ? this.items[key] : undefined;
  }

  // 实现 value 方法，以数组形式返回字典中所有 value 实例的值。
  this.values = function() {
    // 创建返回数组
    var values = [];
    for(var key in this.items) {
      if(this.has(key)) {
        values.push(this.items[key]);
      }
    }
    return values;
  }

  // 实现 clear 方法
  this.clear = function() {
    this.items = {};
  }

  // 实现 size 方法
  this.size = function() {
    var count = 0;
    for(var key in this.items) {
      if(this.has(key)) {
        count++;
      }
    }

    return count;
  }
}
```

