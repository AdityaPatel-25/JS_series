let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);
let mycreatedDate = new Date("03-07-2024");
// console.log(mycreatedDate.toDateString());
// console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));
let newDATE = new Date();
// console.log(newDATE.getMonth());
// console.log(newDATE.getDate());
// console.log(newDATE.getDay());
// console.log(newDATE.getFullYear());
// console.log(newDATE.getHours());
// console.log(newDATE.getMinutes());
// console.log(newDATE.getSeconds());

newDATE.toLocaleString('default', {month: 'long'});
newDATE.toLocaleString('default', {month: 'short'});
newDATE.toLocaleString('default', {weekday: 'long'});
newDATE.toLocaleString('default', {weekday: 'short'});