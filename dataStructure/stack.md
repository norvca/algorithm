# 栈
栈是后进先出（LIFO）结构的有序集合，新添加或待删除的元素都保存在栈顶，旧元素在栈底。就像是桌上的一叠书本那样。



## 创建一个栈

创建一个栈的实例

```js
    function Stack(){
      // 用数组来保存栈里元素
      var item = [];

      // 添加元素到栈顶
      this.push = function(e){
        item.push(e);
      };

      // 移除栈顶元素，返回该元素
      this.pop = function(){
        return item.pop();
      };

      // 返回栈顶元素
      this.peek = function(){
        return item[length-1];
      };

      // 栈为空吗
      this.isEmpty = function(){
        return item.length == 0;
      };

      // 移除栈里所有元素
      this.clear = function(){
        item = [];
      };

      // 返回栈里元素个数
      this.size = function(){
        return item.length;
      };

      // 打印出该栈
      this.print = function(){
        console.log(item.toString());
      };
    }

	var stack = new Stack();

```



## 利用栈进行进制转换

十进二

```js
    function tenToTwo(num){
      var rem,
      binaryString = "";

      while(num > 0){
        rem = num % 2;
        num = parseInt( num / 2) ;
        // 把与 2 的模放入栈
        stack.push(rem);
      }

      while(!stack.isEmpty()){
        // 从栈顶去除放入结果
        binaryString += stack.pop().toString();
      }

      return binaryString;
    }

	tenToTwo(9) // 1001
```

十进多

修改之前算法，使之可以转化任意进制 

如转换 16 进制时，最后的取出的结果需要转换为 16进制的格式。

```js
    function tenToSixteen(num, base){
      var rem,
      binaryString = "",
      digit = "0123456789ABCDEF";

      while(num > 0){
        rem = num % base;
        num = parseInt( num / base) ;
        // 把与 2 的模放入栈
        stack.push(rem);
      }

      while(!stack.isEmpty()){
        // 从栈顶去除放入结果，使用 16 进制的格式
        binaryString += digit[ stack.pop() ];
      }

      return binaryString;
    }

	tenToSixteen(16, 16) // 10
	tenToSixteen(15, 16) // F
```

