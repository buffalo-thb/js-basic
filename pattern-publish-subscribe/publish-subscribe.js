// 发布订阅模式
// 简单的发布订阅模式
// function Event () {
//   this.list = []
// }

// Event.prototype.add = function (listener) {
//   this.list.push(listener)
// }

// Event.prototype.notify = function () {
//   this.list.forEach(function (listener) {
//     listener()
//   })
// }

// var event = new Event()
// event.add(() => { console.log('我是第一个订阅者') })
// event.add(() => { console.log('我是第二个订阅者') })

// event.notify()

// 或者这样写
// var event = {
//   list: [],
//   add (listener) {
//     this.list.push(listener)
//   },
//   notify () {
//     this.list.forEach((listener) => {
//       listener()
//     })
//   }
// }

// event.add(() => { console.log('我是第一个订阅者') })
// event.add(() => { console.log('我是第二个订阅者') })

// event.notify()

// 改进版
// var event = {
//   list: {},
//   add (type, listener) {
//     if (!this.list[type]) {
//       this.list[type] = []
//     }
//     this.list[type].push(listener)
//   },
//   notify (type) {
//     if (!this.list[type]) {
//       return;
//     }
//     this.list[type].forEach((listener, index) => {
//       listener(index)
//     });
//   }
// }

// event.add('ant', () => { console.log('我是ant, 第一个订阅者') })
// event.add('ant', () => { console.log('我是ant, 第二个订阅者') })
// event.add('elephant', () => { console.log('我是elephant, 第一个订阅者') })

// event.notify('ant')

// 改进版
// var event = {
//   list: {},
//   add (type, listener) {
//     if (!this.list[type]) {
//       this.list[type] = []
//     }
//     this.list[type].push(listener)
//   },
//   notify (type) {
//     if (!this.list[type]) {
//       return;
//     }
//     this.list[type].forEach((listener, index) => {
//       listener(index)
//     });
//   },
//   removeListener (type, fn) {
//     if (this.list[type]) {
//       var index = this.list[type].findIndex(listener => listener === fn)
//       this.list[type].splice(index, 1)
//     }
//   }
// }

// var fn1 = () => { console.log('我是ant, 我是第一个订阅者') }
// var fn2 = () => { console.log('我是ant, 我是第二个订阅者') }
// var fn3 = () => { console.log('我是elephant, 我是第三个订阅者') }

// event.add('ant', fn1)
// event.add('ant', fn2)
// event.add('elephant', fn3)

// event.notify('ant')

// event.removeListener('ant', fn2)

// event.notify('ant')


// 另一种版本

