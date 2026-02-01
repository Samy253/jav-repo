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
let flag=1
let boolflag=Boolean(flag)
console.log(typeof flag)
console.log(typeof boolflag)
console.log(boolflag)