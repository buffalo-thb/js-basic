// 发布订阅模式
// 简单的发布订阅模式
// 创建发布者
var event = {
  list: [],
  add (listener) { // 添加订阅
    this.list.push(listener)
  },
  notify () { // 发布消息
    this.list.forEach((listener) => {
      listener()
    })
  }
}
// 创建订阅者
let listener1 = () => { console.log('我是第一个订阅者') }
let listener2 = () => { console.log('我是第二个订阅者') }
// 开始订阅事件
event.add(listener1)
event.add(listener2)
// 开始发布事件
event.notify()

/* 
 缺点：没有事件类型，所有的订阅者都能收到发布者发布的一切消息
*/
