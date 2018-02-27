# 链表
链表中的每个元素由 存储元素本身的节点和一个指向下一个元素的引用 组成，其好处是添加或移动元素时不需要移动其他元素。当它想访问一个元素时，需从表头开始迭代直到找到对应元素。



## 创建一个链表

创建一个链表的实例

```js
function LinkedLlist() {
  // 要加入链表的项
  var node = function(element){
    this.element = element;
    this.next = null;
  };

  // 链表项数量
  this.length = 0;

  // to be continue...
}

```



