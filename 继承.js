// 继承的6中实现方式：

// 1.原型链继承：子类的原型为父类的一个实例对象

function Person (name, age) {
  this.name = name
  this.age = age
  this.play = []
}
Person.prototype.speak = function () {
  console.log("my name is: ", this.name, ", i am ", this.age, "years old")
}
Person.prototype.setName = function (name) {
  this.name = name
}
Person.prototype.setAge = function (age) {
  this.age = age
}
const person = new Person()

function Student (height) {
  this.height = height
}
Student.prototype = person
const s1 = new Student(111)
const s2 = new Student(222)
s1.play.push(1)
s2.play.push(2)
s1.setName('s1')
s2.setName('s2')
console.log(s1, s2)
