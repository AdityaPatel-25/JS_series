const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNums = myNums.filter(num => num % 2 === 0);
// console.log(evenNums); // [2, 4, 6, 8, 10]

const users = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'User' },
  { id: 3, name: 'Charlie', role: 'Admin' },
  { id: 4, name: 'David', role: 'Guest' }
];

let userRoles = users.filter( (user) => user.role === 'Guest' );
console.log(userRoles); 
// [ { id: 4, name: 'David', role: 'Guest' } ]

userRoles = users.filter( (user) => user.role === 'User' );
console.log(userRoles);