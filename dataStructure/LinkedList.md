# 链表
链表中的每个元素由 存储元素本身的节点和一个指向下一个元素的引用 组成，其好处是添加或移动元素时不需要移动其他元素。当它想访问一个元素时，需从表头开始迭代直到找到对应元素。



## 创建一个链表

创建一个链表的实例

```js
function LinkedList() {
  // 要加入链表的项
  var Node = function(element){
    this.element = element;
    // 最后元素下一个元素始终是 null
    this.next = null;
  };

  // 链表项数量
  this.length = 0;

  // 第一个节点引用
  this.head = null;

  // 链表尾添加元素
  this.append = function(element){
    // 创建 Node 项
    var node = new Node(element),
        current;

    // 第一个元素为空时，head 指向 node 元素;
    if(this.head === null) {
      this.head = node;
    } else {
      // 第一个元素不为空时，先获取第一个元素的引用;
      current = this.head;

      // 循环访问直到最后一个元素
      while(current.next) {
        current = current.next;
      }

      // 让最后一个元素的 next 指向我们要添加的节点
      current.next = node;
    }

    // 更新链表长度
    this.length++;
  };

  // 从链表中移除元素
  this.removeAt = function(position){
    // 检查删除位置是否有效
    if (position > -1 && position < this.length) {
      // 创建表头的引用
      var current = this.head,
      previous,
      index = 0;

      // 删除头部元素
      if (position === 0) {
        // 把表头指向第二个元素的引用，即删除表头
        this.head = current.next;
      } else {
        // 循环找出待删除元素的位置
        while (index++ < position) {
          // 保存前一个位置
          previous = current;
          // 要删除的当前位置元素
          current = current.next;
        }
        // 让目标元素前一个元素链接目标元素的下一个元素，即删除该目标元素
        previous.next = current.next;
      }
      // 更新链表长度
      this.length--;
      // 返回目标元素
      return current.element;

    } else {
      // 删除位置无效，返回 null
      return null;
    }
  };

  // 先抄一遍
  // 在任意位置插入一个元素
  this.insert = function(position, element) {
    // 检查越界值
    if(position >=0 && position <= this.length) {
      var node = new Node(element),
          current = this.head,
          previous,
          index = 0;

      // 在第一个位置插入
      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }

      this.length++;
      return true;
    } else {
        return false;
    }
  };

  // toString 方法
  this.toString = function() {
    var current = this.head,
        string = '';

    // 遍历链表中元素
    while(current) {
      string += current.element + (current.next ? ", " : "");
      current = current.next;
    }

    return string;
  };
};
```



