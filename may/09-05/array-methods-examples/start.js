let products = [
  {
    type: "t-shirt",
    price: 9.99,
    color: "red",
  },
  {
    type: "socks",
    price: 4.99,
    color: "blue",
  },
  {
    type: "jeans",
    price: 44.99,
    color: "black",
  },
  {
    type: "t-shirt",
    price: 14.99,
    color: "green",
  },
  {
    type: "t-shirt",
    price: 22.99,
    color: "blue",
  },
  {
    type: "jeans",
    price: 59.99,
    color: "blue",
  },
  {
    type: "skirt",
    price: 24.99,
    color: "yellow",
  },
  {
    type: "socks",
    price: 14.99,
    color: "yellow",
  },
];


/* Map */

// Capitalize the type of each product
let Capitalize = products.map(n => n.type[0].toUpperCase() + n.type.slice(1))
console.log("Capitalize",Capitalize)
// Get an array containing only product types.
// Example: ["T-shirt", "Socks", "Jeans", "T-shirt"]
let filterType = products.reduce((acc, curr) => {
  acc.push(curr.type)
  return acc
},[])
console.log(filterType)
// Add a new property to the products describing the product

 function fun (prod) {
   prod.map(n => n.describing =  `The ${n.type} is ${n.price} and the color is ${n.color}` ) 
   return prod
}
console.log(fun(products))

/* Filter and find */
// Get an array with only yellow products
console.log("\n Find color yellow")
console.log(products.filter(n => n.color.toLowerCase() === "yellow"))

// Get an array with products that cost more than 15
console.log("\n Price mopre than 15")
let more = products.filter(n => n.price > 15)
console.log(more)
// Get an array with listing only the types plus color of products that cost more than 15
let copy = []
for (let item of more) {
  copy.push(item)  
}
let array = copy.filter(n => {
  let copy = []
  return copy.push(n.type)
   
})
console.log("Filtered", array)

// Get the first jeans in the products
console.log("Only Jeans",products.find(n => n.type === "jeans"))

// Check if there is at least a blue product
console.log("Only color Blue",products.find(n => n.color === "blue"))


// Check if there is at least a pink product
console.log("Only color Pink",products.find(n => n.color === "pink"))
console.log("Only color Pink",products.some(n => n.color === "pink"))


// Check if there are at least 2 blue products
let blueColor = products.filter(n => n.color === "blue")
console.log("Blue",blueColor)
/* Reduce */

// Calculate the total price of products
let totalCal = products.reduce((acc, curr) => acc += curr.price, 0)
console.log("Total price",Number(totalCal.toFixed(2)))
// Get an array with only product types, but without repetitions

let repetitions = products.reduce((acc, curr) => {
  if (acc.indexOf(curr) < 0) {
    acc.push(curr)
  } 
    return acc

}, [])
console.log("Repetetions",repetitions)

// Get the most expensive product
let fullCopy = []
for (let item of products) {
  fullCopy.push(item)
}

let expensive = fullCopy.sort((a, b) => b.price - a.price)
let mostExpensive = expensive[0]
console.log("Most Expensive",mostExpensive)
// Get the cheapest product
let cheap = fullCopy.sort((a, b) => a.price - b.price)
let mostCheapest = cheap[0]
console.log("Most Cheapest", mostCheapest)

// Get the type and color of the cheapest product
let empty = []
empty.push(mostCheapest)
let arrayCheapest = empty.reduce((acc, curr) => {
  let ob = {
    type: curr.type,
    color:curr.color
  }
  acc = ob
  return acc
},[])
 console.log(arrayCheapest)


let animal = {
  type: "cat",
  name: "hello",
  color: "orange"
}
console.log(animal.age)
