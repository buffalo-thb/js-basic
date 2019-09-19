// 发布订阅模式
// 添加消息类型
// 以订阅新闻类型为例，有的喜欢军事题材，有的喜欢体育题材，有的人喜欢其他题材
var event = {
  list: {}, // 订阅列表为对象 { 'type1': [fn1, fn2, ...], 'type2': [fn3, fn4, ...] }
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
  }
}

event.add('military', () => { console.log('我是第一个军事新闻订阅者') })
event.add('military', () => { console.log('我是第二个军事新闻订阅者') })
event.add('sport', () => { console.log('我是第一个体育新闻订阅者') })

event.notify('military')
// event.notify('sport')

/* 
  不完善，没有取消订阅
*/