let score="33"

//console.log(typeof score)// string 
//console.log(typeof (score))

let val=Number(score)

//console.log(typeof val)// number
/*
if the string is 33abc and then you did Number(score) it will convert to number
but if you try to print the number it will give NaN->not a number
*/

//same
// let flag=1
// let boolflag=Boolean(flag)
// console.log(typeof flag)
// console.log(typeof boolflag)
// console.log(boolflag)
/*------------------operations------------------ */
console.log(2*3)
console.log(2**3)//->power
let str1="Hello"
let str2=" Rini"
let str3=str1+str2
console.log(str3)
console.log("1"+2)//->12
console.log("1"+2+2)//->122
console.log(1+2+"2")//->32(1+2=3,+"2")
console.log(true)//->o/p: true
console.log(+true)//->o/p: 1
console.log(+"")//->o/p: 0

let gameCounter=100
gameCounter++
console.log(gameCounter)//->101 post/pre inc dec->same as c,c++