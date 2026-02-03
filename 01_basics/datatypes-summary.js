//primitive

//7 types: String,Number,Boolean, null,undefined,Symbol,BigInt
//? statically typed or dynamically typed?
//reference type/non primitive:
// Array, Objects, Functions

const id=Symbol('123')
const id2=Symbol('123')// typeof= symbol
console.log(id)
console.log(id2)
console.log(id===id2)//->false

const heroes=["Ironman","Thor","Captain America"]// Array ->typeof=object
let myObj={//->objects
    name: "Rini",
    age: 22,
}
const myFunction=function(){//->typeof= function
    console.log("Hello World")
}