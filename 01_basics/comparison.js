// console.log("2">1) // different datatypes but still same operation
// console.log("02">1) //prefer comparing two same datatypes because optputs sometimes may not be as predictable as you'd expect
// console.log(null>0)
// console.log(null==0)//false, == works differently than >,< 
// console.log(null<=0)// true->js converts null into a number first and then compares
// console.log(null>=0)

// ===->strict check, this will also check the datatype
console.log("2"===2) //false