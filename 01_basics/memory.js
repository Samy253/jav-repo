//types->Stack(primitive), Heap(non primitive)
//stack
let name="Rini"
let name2=name
name2="Granth"
console.log(name)// name stays the same 
console.log(name2)// while name2 gets changed
/*because in stack a copy of the variable declared is brought to 
the top of the stack and then that is changed when we redeclare */


//heap
let user1={
    email:"user@google.com",
    upi: "upay@oksbi",
}
let user2=user1;
user2.email="name@gmail.com"
console.log(user1.email)// both of these users emails will change
console.log(user2.email)
/*this happens because when we redeclare, there is no copy of the 
original variable, rather a reference to the original object is 
created and when we make changes, the original object gets changed */