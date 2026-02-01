const accountId=447589
let accountEmail="rin685859@gmail.com"
var accountPassword="12342"//var is not used because of issues in block scope and functional scope
accountCity="Guwahati"
let accountState

//accountId=2->not allowed
accountEmail="rims@2323"
accountPassword="4567"
accountCity="Raipur"
// console.log(accountId)
// console.log(accountEmail)   ->this or if you want to print everything in one go do like below
// console.log(accountPassword)
// console.log(accountCity)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) // makes a table