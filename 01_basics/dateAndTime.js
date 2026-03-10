//dates->object

let myDate=new Date()
console.log(myDate)//2026-02-13T03:48:40.860Z
console.log(myDate.toString())//Fri Feb 13 2026 03:49:28 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString())//Fri Feb 13 2026

let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString())//Mon Jan 23 2023

let myCreatedDate2=new Date(2023,0,23,5,3)
console.log(myCreatedDate2.toLocaleString())//1/23/2023, 5:03:00 AM->MM/DD/YYYY

let myCreatedDate3=new Date("23-01-2023")//DD/MM/YYYY->invalid date
console.log(myCreatedDate3.toLocaleString())//1/23/2023, 5:03:00 AM->MM/DD/YYYY



//timestamps

let myTimeStamp=Date.now()

console.log(myTimeStamp)//1770955275268->milisecond from start of counting time
//in seconds
console.log(Math.round(myTimeStamp/1000))//1770955384

let newDate=new Date()
console.log(newDate.getDay())//5->start from monday, 1=M,2=T,3=W,4=T,5=F
//date and month->0 based indexing

//customization of toLocaleString
newDate.toLocaleString('default',{
    weekday: "long"
})