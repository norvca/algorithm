# 队列
队列和栈很相似，但遵循的是先进先出( FIFO )原则。队列在尾部添加新元素，顶部移除元素。新添加的元素必须排在队列的末尾，就像上厕所那样。

## 创建一个队列

创建一个队列的实例

```js
function Queue(){
  var item = [];

  // 队列末尾添加元素
  this.enqueue = function(e){
    return item.push(e);
  };

  // 队列顶部移除元素
  this.dequeue = function(){
    return item.shift();
  };

  // 返回队列顶部的元素
  this.front = function(){
    return item[0];
  };

  // 队列是否为空
  this.empty = function(){
    return item.length == 0;
  };

  // 返回队列元素个数
  this.size = function(){
    return item.length;
  };

  // 打印出队列元素
  this.print = function(){
    return console.log(item.toString());
  };
}

// 实例化一个队列
var queue = new Queue();
```



## 案列：击鼓传花

```js
function deliverFlowers(nameList, num) {
  var queue = new Queue();

  // 存储参数人员到私有变量
  for(var i=0; i<nameList.length; i++){
    queue.enqueue(nameList[i]);
  }

  var outer = "";
  // 不断淘汰至人数为一
  while(queue.size() > 1){
    for(var j = 0; j < num; j++) {
      queue.enqueue(queue.dequeue());
    }
    outer = queue.dequeue();
    console.log("淘汰了：" + outer);
  }
  console.log( "获胜者是：" + queue.dequeue());
}

var nameList = ['tom', 'jack', 'sliver', 'jane', 'michael', 'marry', 'jhon'];
var num = 4; // 传四次花
deliverFlowers(nameList, num);
```