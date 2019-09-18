### call apply bind
* 三者都能改变this指向
#### call
* 传参的区别，第一个参数是执行环境，第二参数起，是每一个参数
#### apply
* 第一个参数是执行环境，第二个参数是参数数组
#### bind
* bind绑定后，不会立即执行函数，而是返回值才能执行

### 用法
* 如果我们在不知道什么时候会调用函数的时候，需要改变this的指向，那么只能使用bind。
```
// 比如：在定时器中，我们想改变this的指向，但是又不能立即执行，需要等待2秒，这个时候只能使用bind来绑定this。
setInterval(function(){
    // 这里面的this不指向window
}.bind(this), 2000);
```

### 参考链接
* https://www.cnblogs.com/lvonve/p/9260100.html
* https://github.com/Daotin/Web