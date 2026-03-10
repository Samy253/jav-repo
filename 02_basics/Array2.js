const marvel_heroes=["ironman","thor","spiderman"]
const dc_heroes=["superman","batman","wonderwoman"]

//marvel_heroes.push(dc_heroes)//this will push an array inside an array
//not the elements of the array->for the below properties to work you need to comment this out

console.log(marvel_heroes)
//o/p->
/*[
  'ironman',
  'thor',
  'spiderman',
  [ 'superman', 'batman', 'wonderwoman' ]
]*/

// marvel_heroes.concat(dc_heroes)//->same output
// console.log(marvel_heroes)

const AllHeroes=marvel_heroes.concat(dc_heroes)
console.log(AllHeroes)
/*---output----
[ 'ironman', 'thor', 'spiderman', 'superman', 'batman', 'wonderwoman' ]
 */

const new_heroes=[...marvel_heroes,...dc_heroes]//spread operator->can concat multiple arrays at once
console.log(new_heroes)
/*[ 'ironman', 'thor', 'spiderman', 'superman', 'batman', 'wonderwoman' ] */

const arr2=[1,2,3,[4,5,6],7,8,[9,10,[11,12]]]
const new_arr2=arr2.flat(Infinity)//we need depth that is the number of array inside array recursion, if you dont know the depth just put infinity
console.log(new_arr2)
/*[
   1,  2, 3, 4,  5,
   6,  7, 8, 9, 10,
  11, 12
]*/


//change type to array
console.log(Array.isArray("Rini"))//false
console.log(Array.from("Rini"))//[ 'R', 'i', 'n', 'i' ]
//console.log(Array.from(name:"Rini"))//[]->because it doesnt know if it needs to turn the keys to array of the value to array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))//[ 100, 200, 300 ]