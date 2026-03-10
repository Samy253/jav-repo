//singleton
//Object.create->constructor
//object literals
const mySym=Symbol("key1")
const user={
    name:"Rini",
    mySym:"myKey1",
    age:18,
    location:"silchar",
    email:"rini@gmail.com",
    iaLoggedIn:false
}//->object declared
console.log(user)
/*output-
{
  name: 'Rini',
  mySym: 'myKey1',->printed as a string
  age: 18,
  location: 'silchar',
  email: 'rini@gmail.com',
  iaLoggedIn: false
}
*/


const user2={
    name:"Rini",
    [mySym]:"myKey1",
    age:18,
    location:"silchar",
    email:"rini@gmail.com",
    iaLoggedIn:false
}//->object declared
console.log(user2)
/*output-
{
  name: 'Rini',
  age: 18,
  location: 'silchar',
  email: 'rini@gmail.com',
  iaLoggedIn: false,
  Symbol(key1): 'myKey1'->printed as a symbol
}
*/

//function
user.greeting=function(){
    console.log("Hello JSuser")
}

user.greeting2=function(){
    console.log(`Hello JSuser,$(this.name)`)
}

console.log(user.greeting())
console.log(user.greeting2())

/*output-
Hello JSuser
undefined
Hello JSuser,$(this.name)
undefined
*/