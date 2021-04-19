function hello(person) {
    return 'hello' + person;
}
function alertName() {
    console.log('my name is tom');
}
let fibonacci = [0, 1, 2, 3, 5, 8];
let user = 'Tom';
let isDone = Boolean(1);
// console.log(isDone)
let sum = function (x, y) {
    return x + y;
};
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else {
        return x.split('').reverse().join('');
    }
}
console.log(reverse('qwer'));
function getCashData(key) {
    return window.cache[key];
}
function createArray(length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
//# sourceMappingURL=hello.js.map