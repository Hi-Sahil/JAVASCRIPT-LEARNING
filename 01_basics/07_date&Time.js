// Dates 
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


let myCreatedDate = new Date(2024 , 11 ,5)
//console.log(myCreatedDate.toDateString());

let my2CreatedDate = new Date(2024 , 11 ,5, 8,9)
//console.log(my2CreatedDate.toLocaleString());

let mytimestamps = Date.now()

// console.log(mytimestamps);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);

console.log(newDate.getDay());
console.log(newDate.getMonth());

console.log(`${newDate.toLocaleString('default',{
    weekday : "long",
    
})}`)