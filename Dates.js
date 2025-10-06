let date = new Date();
console.log(date.toString());

console.log(date.toLocaleDateString());
console.log(date.toLocaleString());

//type of Date is object
console.log(typeof date);

let myCreatedDate = new Date(2025,0,13,5,3);
console.log(myCreatedDate.toLocaleString());

let myDate = new Date("2025-4-13");
console.log(myDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log((myTimeStamp));
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

//
newDate.toLocaleString('default',{
weekday: "long",
})