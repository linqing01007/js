function hello (person: string) {
  return 'hello' + person
}
function alertName (): void {
  console.log('my name is tom')
}
interface Person {
  name: string,
  age?: number,
  [propName: string]: any
}
let fibonacci: number[] = [0, 1, 2, 3, 5, 8]
let user = 'Tom'
let isDone: boolean = Boolean(1)

// console.log(isDone)

let sum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y
}

function reverse (x: number): number
function reverse (x: string): string
function reverse (x: string | number): string | number {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else {
    return x.split('').reverse().join('')
  }
}
console.log(reverse('qwer'))

function getCashData (key: string): any {
  return (window as any).cache[key]
}

interface Cat {
  name: string,
  run(): void
}

function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = []
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}