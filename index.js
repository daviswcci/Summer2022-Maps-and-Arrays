// Concepts We've Discussed So Far
// variables, arrays, loops, conditionals, classes, JSON, objects, functions, operators, event listeners, query selectors, DOM manipulation

// JSON: JavaScript Object Notation
// JSON is a way to describe the objects that we create. Every object we make can be written as JSON, 
// and any JSON we write can be stored as an object.

// General template for JSON:
// { property:value, property2:value2, ... }
let davis = { name:"Davis Kyle Murphy", age:24, favoriteGames:["Minecraft", "Fall Guys", "League"] }
console.log(davis);

// Queue:
// a type of collection where first in becomes first out.
// FIFO - refers to how we add and remove from the collection

// Query Selectors
// A way to search, filter, and select objects from a collection. 
// C# - LINQ (where), EF Selectors (db.Posts) to grab items from lists/arrays/databases
// JS - DOM (document.querySelector(), document.getElementsByClassName()) to grab HTML elements

// Event Listeners
// "When" something happens, perform this action.
// A piece of code that waits for a particular trigger, and then runs an action as a response
// html.addEventListener("click", responseFunction)

// Dictionaries, Mapping, Callback Functions

// Dictionaries - Maps
// a type of collection where each key is associated with some kind of value
// we look up values by providing the key we want to search for
// C# - new Dict<keyType,valueType>()
// JS - There isn't really a dictionary 'type' BECAUSE objects and arrays work like dictionaries
//      Ex. Every property on an object can be accessed as if the object were a dictionary
console.log(davis.age); // this prints the age of Davis using property syntax
console.log(davis["age"]); // this prints the age of Davis using dictionary syntax
let temperatures = {};
temperatures["Atlanta"] = 57;
console.log(temperatures);
console.log(temperatures["Atlanta"]);
// Takeaways: Put your key in square brackets. If it isn't a string, it will turned into one.
// This causes problems if you try to use objects as keys, because all objects will be converted
// to the same string ([object Object])
// As well, all key-value pairs in javascript can just be thought of as properties of an object

// Mapping
// Mapping is transforming all elements of a collection in a defined way
// Mapping involves taking starting values (inputs) and following a path (a function) to end values (outputs)
// Similar to foreach loop, mapping exists as a function on the array object type
// Ex. array.Map(...something);
let marvelMovies = ["Captain America", "Iron Man", "Guardians of the Galaxy Vol. 2", "Avengers", "Thor: Dark World", "Logan", "Deadpool 2"];
let reviews = marvelMovies.map((movie) => {return movie + " is great!"});
// we can also just pass the name of a function into the map method
console.log(reviews);

// Callback Functions
// Callback function is a function that we pass as an argument to a method
// What is a Method? - function, bundled set of instructions with inputs and outputs
// What is an argument? - Argument is another word for parameter, which is another word for input
// A callback function is a function that we provide as input to another function
// Ex. The functions we pass to foreach, map, where, etc. 
// Often we just pass the function's NAME not the name + parentheses. 
// exampleFunc() <- parentheses indicate we're handing what the function returns
// exampleFunc <- no parentheses indicate we're handing the function
function exampleFunc(int){
    return int * 3;
}
let numbers = [1,2,3,4,5];
let multiplied = numbers.map(exampleFunc);
console.log(multiplied);