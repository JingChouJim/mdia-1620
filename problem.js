// Time to go shopping for stable supplies!
//
// Create a program that tracks items added to a shopping cart.
//
// Initialize the program with an array of objects, representing a cart that already contains 3 items, 
// where each object represents an item with a name (string) and a price (number).
//
// There should be a function that accepts:
// - the array of objects representing items in the cart 
// - an object representing an item to add, also containing a name and price.
// 
// The function should:
// - add a new entry to the array of items in the cart
// - log out a message that lets the user know the name of the item added to the cart
// - return the total number of items in the cart.
//
// Separately, use the return value of the function to log out how many items are in the cart.
//
// BONUS: Inside the function, log out "You can no longer use the express checkout!"
// if there are 7 or more items in the cart.



// Create three starting items, each with a name and price.
let itemOne = {
    name:"tomato",
    price: 30
}


let itemTwo = {
    name:"grava",
    price: 20
}

let itemThree = {
    name:"chocolate",
    price: 40
}

// Store the three starting items in the shopping cart.
let shoppingCart = [itemOne, itemTwo, itemThree];

function addItem(cart, item) {
    
    cart.push(item);
    console.log("Added " + item.name + " in to the cart. ");
    
// Express if the items are more than 7 will show up the message inside the string
  if (cart.length >= 7) {
    console.log("You can no longer use the express checkout!");    
  }



  return cart.length;
}


  let newItem = {
    name: "taco",
    price: 45
  }

// Add the new item and store the returned item count. 
  let totalItems = addItem(shoppingCart, newItem);

console.log("There are " + totalItems + " items in the cart. ");




