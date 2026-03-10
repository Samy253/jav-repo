const score=100
console.log(score);
const balance=new Number(100);
console.log(balance)
console.log(balance.toString().length);
console.log(balance.toFixed(4));// gives decimal 

const otherNum=23.8933
console.log(otherNum.toPrecision(3));// 23.9
const otherNum2=123.8933
console.log(otherNum2.toPrecision(8));// 124->rounds off to the number of digits given

const hundreds=1000000
console.log(hundreds.toLocaleString());//1,000,000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000

//math
console.log(Math.abs(-4))//4
console.log(Math.round(4.873))//5
console.log(Math.ceil(4.873))//5
console.log(Math.floor(4.873))//4
console.log(Math.min(6,3,8,2))//2


console.log(Math.random())//between 0-1
console.log((Math.random()*10)+1)//between 1-10




