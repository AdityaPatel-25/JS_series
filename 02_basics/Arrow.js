const user = {
    username: "aditya",
    price: 199,

    welcomeMessage: function() {
       console.log(`${this.username}  , welcome to the website `)    
    }
}
user.welcomeMessage()

const addTwo = (a, b) => {
    return a + b
}

//console.log(addTwo(5, 10));
const addThree = (a, b, c) => (a + b + c)

console.log(addThree(5, 10, 15));