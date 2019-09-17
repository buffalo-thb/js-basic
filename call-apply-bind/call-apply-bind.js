/* 第一种改变this指向 */
function test (x, y) {
  console.log(x+y)
  console.log(this)
}
var obj = {}
// test.call(null, 10, 20) // 打印 30 window对象
// test.call(obj, 10, 20) // 打印 30 {}

// test.apply(null, [10, 20]) // 打印 30 window对象
// test.apply(obj, [10, 20]) // 打印 30 {}



/* 第二种改变this指向 */
function Person (age) {
  this.age = age
}
Person.prototype.eat = function () {
  console.log(this.age)
}
function Student (age) {
  this.age = age
}
var per = new Person(20)
var stu = new Student(18)
// per.eat() // 20
// per.eat.call(stu) // 18
// per.eat.apply(stu) // 18




/* bind改变this */
function testBind (x, y) {
  console.log(x + y)
  console.log(this)
}

var bindObj = { name: 'bindObj' }

var bindAfter1 = testBind.bind(null, 10, 20)
var bindAfter2 = testBind.bind(bindObj, 10, 20)

// bindAfter1() // 30  window对象
// bindAfter2() // 30  { name: 'bindObj' }

