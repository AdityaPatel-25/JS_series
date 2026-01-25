const myNums = [1,2,3,4,5]

// const myTotal = myNums.reduce(function (acc,currVal) {
//     console.log(`acc: ${acc}  currVal: ${currVal}`);
//     return acc + currVal;
// }, 0);

const myTotal = myNums.reduce( (acc, currVal) => acc + currVal , 0);

console.log(myTotal); // 15

// const product = {
//     name: 'Laptop',
//     price: 1000,
//     discount: 0.1
// };

// }