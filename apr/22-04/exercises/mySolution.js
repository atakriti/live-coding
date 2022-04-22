// 01
//  * Write a function to create an object named student as the following:
//  * 
//  * const student = {
//  * name : "David Rayy",
//  * sclass : "VI",
//  * rollno : 12 
//        };
//  * 
//  * then delete the rollno property from the following object. 
//  * Also print the object before or after deleting the property.

const student = {
    name: "David Rayy",
    class : "VI",
    rollNo : 12 
};
console.log(student)
delete student.rollNo
console.log("with deleting :",student)
// ================================================
// 2
/* 02 
 * Create an object to store the following information about your favorite movie: 
 * title (a string), duration (a number), and stars (an array of strings).
 * Create a function to print out the movie information like so: 
 * "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/
let favMovie = {
    title: "avengers",
    duration: 2,
    stars: ["Spider man","Thor","Iron man","Hulk"]
}
console.log(`${favMovie.title} is ${favMovie.duration} Hours.The stars are : ${favMovie.stars}`)
// =============================================
// 3
/* 03 medium
 * 
 * Build your eshop product catalogue like that:
 * 1. Build and array with 10 objects. Each object should have a name property and 
 * a value and a price property and a value.
 * Example of product: 
 *     { 
            name: "Blue Shirt",
            price: 10
        }
 * 2. Build a list of carts of an online eshop like that:
 * Build an array with 10 objects. 
 * example of cart:
 *     {
            user: "alkis",
            product: "Hat",
            quantity: 3
        }
 * Each object should have:
 *  a name property and a value  (the value should be a product name from the first array)
 *  a quantity property and a value (the value should be a number)
 *  a user property and a value (the value should be the username)
 * 
 * Write functions to:
 * a) add a given product to the cart
 * b) list the products of the cart for a given user
 * c) list the total items in the cart for a given user
 * d) change the quantity of a given product in that cart
 * e) delete a product from the cart
 * f) find the total value of the cart of a given user
 */
let eShop = [
    {
        name: "shirt",
        price: 10
    },
    {
        name: "shoes",
        price: 30
    },
    {
        name: "jeans",
        price: 20
    },
    {
        name: "hat",
        price: 8
    },
    {
        name: "skirt",
        price: 15
    }

];
let cards = [
    {
        user: "anwar",
        product: "Jeans",
        quantity: 2
    },
    {
        user: "ahmad",
        product: "T-Shirt",
        quantity: 5
    },
    {
        user: "anwar",
        product: "Shoes",
        quantity: 4
    },
    {
        user: "omer",
        product: "Watch",
        quantity: 10
    },
    {
        user: "hany",
        product: "Jacket",
        quantity: 3
    }
];
// a
let given = (pro) => {
    cards.push(pro)
}
given({
    user: "new user",
    product: "Headset",
    quantity:2
})
console.log(cards);
// b
let givenUser = (pro) => {
    for (let i = 0; i < cards.length; i++){
        if (cards[i].user === pro) {
            console.log(`The products that ${pro} has:`,cards[i].product)
        }
    }
}
givenUser("anwar");
// c
let totalUser = (user) => {
    let totalOfUser = 0;
    for (let i = 0; i < cards.length; i++){
        if (cards[i].user === user) {
            totalOfUser += cards[i].quantity
        }
    }
    console.log(`The total of Quantity of ${user} ${totalOfUser}`)
}
totalUser("anwar")
// d
let change = (user,change) => {
    for (let i = 0; i < cards.length; i++){
        if (cards[i].user === user) {
            cards[i].quantity = change
        }
    }
    
    
}
change("anwar", 2)
console.log(cards)
// changing the total amount after changing 
let totalUser1 = (user) => {
    let totalOfUser = 0;
    for (let i = 0; i < cards.length; i++){
        if (cards[i].user === user) {
            totalOfUser += cards[i].quantity
        }
    }
    console.log(`The total of Quantity after changing of ${user} ${totalOfUser}`)
}
totalUser1("anwar")

// e
let del = () => {
    return cards.splice(4,1)
}
del()
console.log("after deleting a product",cards)
// f
let find = (find) => {
    let totalOfPrice = 10;
    for (let i = 0; i < cards.length; i++){
        if (cards[i].user === find) {
            totalOfPrice *= cards[i].quantity
        }
    }
    console.log(`for each item is 10€ so the Result of ${find} is ${totalOfPrice}€`)
}
find("anwar")
