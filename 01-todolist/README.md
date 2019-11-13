01-To Do List

>参考：[Vue新手向](https://juejin.im/post/5c3e9f946fb9a049f06a85ff)
>
>开始时间：2019-11-13

## UI界面

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vue Todo</title>
  <style>
    .completed {
      text-decoration: line-through;
    }
 
    .selected {
      color: red;
    }
  </style>
</head>
<body>
<div id="todo-app">
  <div>
    <input type="button" value="全部标为完成"/>
    <input type="text" placeholder="添加 todo"/>
  </div>
  <!-- todo list -->
  <ul>
    <li>
      <span class="completed">学习 Vue</span>
      <input type="button" value="标为完成">
      <input type="button" value="删除">
      <input type="text" value="编辑 todo..."/>
    </li>
    <li>
      <span>学习Vue</span>
      <input type="button" value="标为完成">
      <input type="button" value="删除">
      <input type="text" value="编辑 todo..."/>
    </li>
    <li>
      <span>伺候好猫主子，过上快乐的铲屎生活</span>
      <input type="button" value="标为完成">
      <input type="button" value="删除">
      <input type="text" value="编辑 todo..."/>
    </li>
  </ul>
  <!-- end todo list -->
  <div>
    <span>剩余 3 项未完成 ---</span>
    <span>筛选：
      <input type="button" class="selected" value="全部">
      <input type="button" value="进行中">
      <input type="button" value="已完成">
      <input type="button" value="清除已完成">
      <input type="button" value="清除全部">
    </span>
  </div>
</div>
    
<script src="https://cdn.bootcss.com/vue/2.5.16/vue.js"></script>
</body>
</html>
```



## 添加todo列表

* 使用`v-model`指令将`input`的`value`值和`Vue`的实例绑定，然后监听用户按下回车的事件，事件触发后则调用实例中相应的方法，将新的值添加到`todos`列表 

  ```html
  <div id="todo-app">
      ...
    <div>
      ...
      <input type="text" 
             placeholder="添加 todo" 
             v-model="newTodoTitle"
             @keyup.enter="addTodo/>
      <span v-if="emptyChecked" style="color:red">请输入内容</span>
    </div>
      ...
  </div>
  ```

  ```js
  var app = new Vue({
  	el: '#todo-app',
  	data: function () {
    		return {
              todos: [],
              newTodoTitle: ''
          }
      },
      methods: {
          addTodo: function () {
                  this.todos.push({id: id++, title: this.newTodoTitle});
                  this.newTodoTitle = ''
              }
      }
  })
  ```

  * `@keyup.enter="addTodo"`：按下回车键时调用`addTodo`

    [按键修饰符]([https://cn.vuejs.org/v2/guide/events.html#%E6%8C%89%E9%94%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6](https://cn.vuejs.org/v2/guide/events.html#按键修饰符))

  * 

