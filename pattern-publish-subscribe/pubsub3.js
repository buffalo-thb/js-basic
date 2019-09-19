// 发布订阅模式
// 添加取消订阅
var event = {
  list: {}, // 对象
  add (type, listener) {
    if (!this.list[type]) {
      this.list[type] = []
    }
    this.list[type].push(listener)
  },
  notify (type) {
    if (!this.list[type]) {
      return;
    }
    this.list[type].forEach(listener => {
      listener()
    });
  },
  removeListener (type, listener) {
    if (!this.list[type]) { return; }
    if (!listener) { this.list[type] = [] }
    var index = this.list[type].findIndex(item => item === listener)
    this.list[type].splice(index, 1)
  }
}

let militaryListener1 = () => { console.log('我是第一个军事新闻订阅者') }
let militaryListener2 = () => { console.log('我是第二个军事新闻订阅者') }
let sportListener1 = () => { console.log('我是第一个体育新闻订阅者') }

event.add('military', militaryListener1)
event.add('military', militaryListener2)
event.add('sport', sportListener1)

event.notify('military')

// 移除第二个军事新闻订阅者
// event.removeListener('military', militaryListener2)
// event.notify('military')

// 移除所有军事新闻订阅者
// event.removeListener('military')
// event.notify('military')
