//array
const arr=[4,3,2,1]//->in js Arrays are resizeable

arr.push(5)//5 is added at the last 
console.log(arr)

arr.pop()//last element is popped
console.log(arr)

arr.unshift(7)//7 is added to first
console.log(arr)

console.log(arr.includes(9))//[ 7, 1, 2, 3, 4 ], false
console.log(arr.indexOf(9))//-1
console.log(arr.indexOf(3))//3

const newArr=arr.join()//changes the type to string

console.log(arr)
console.log(newArr)


//slice,splice

console.log("A",arr)//A [ 7, 1, 2, 3, 4 ]
//slice
const newArr2=arr.slice(1,3)

console.log(newArr2)//[ 1, 2 ]->upper limit of range not included(index)
console.log("B after slice\n",arr)//[ 7, 1, 2, 3, 4 ]->no change in the original array after slice

//splice

const newArr3=arr.splice(1,3)
console.log(newArr3)//[ 1, 2, 3 ]->upper limit of the range included
console.log("C after splice\n",arr)//[ 7, 4 ]->original array gets changed all the splice outputs get cut out of the original array

/*-----outputs---------

[ 4, 3, 2, 1, 5 ]
[ 4, 3, 2, 1 ]
[ 7, 4, 3, 2, 1 ]
false
-1
2
[ 7, 4, 3, 2, 1 ]
7,4,3,2,1
A [ 7, 4, 3, 2, 1 ]
[ 4, 3 ]
B after slice
 [ 7, 4, 3, 2, 1 ]
[ 4, 3, 2 ]
C after splice
 [ 7, 1 ]*/