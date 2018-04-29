# 树
是一种非顺序数据结构，对存储需要快速查找的数据非常有作用。



## 基础知识

![树的基本结构](../pic/binarySearchTree.png)

- 一个树结构包括一系列存在父子关系的节点。
- 位于树顶部的节点叫做根节点，至少有一个子节点的节点称为内部节点，没有子元素的节点称为外部节点或叶节点。
- 一个节点可以有祖先和后代，节点的祖先包括父节点、祖父节点、曾祖父节点等。节点的后代包括子节点、孙子节点、曾孙节点等。
- 子树由节点和它的后代节点组成，如节点 13、12 和 14 构成了节点 15 的子树。
- 节点的深度指它祖先节点的数量，如节点 3 有三个祖先节点，所以深度是 3。
- 树的高度取决于所有节点深度最大值，树也可以被划分层级，根节点在 0 层，它的子节点在 1 层，以此类推。



## 二叉搜索树

二叉搜索树是二叉树的一种，它只允许你在左侧节点存储比父节点小的值，右侧节点存储比父节点大或等于的值。

### 实现一个二叉搜索树

```js
function binarySearchTree() {
  // 声明树中的节点
  var Node = function(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  // 声明根节点
  this.root = null;

  // 实现向树中插入一个键方法
  this.insert = function(key) {
    // 新建节点
    var newNode = new Node(key);

    // 插入的节点为树的第一个节点的话
    if(this.root === null) {
      this.root = newNode;
    } else {
      // 插入节点为非根节点，需要使用辅助函数
      insertNode(this.root, newNode);
    }
  }

  // 辅助函数
  var insertNode = function(node, newNode) {
    // 新节点比根节点小则放在节点左侧
    if(newNode.key < node.key) {
      if(node.left === null) {
        node.left = newNode;
      } else {
        // 左侧如果已经有节点了则循环使用辅助函数直到填入空节点
        insertNode(node.left, newNode);
      }
    } else {
      // 新节点比根节点大则放在节点右侧
      if(node.right === null) {
        node.right = newNode;
      } else {
        // 右侧如果已经有节点了则循环使用辅助函数直到填入空节点
        insertNode(node.right, newNode);
      }
    }
  };
}
```

