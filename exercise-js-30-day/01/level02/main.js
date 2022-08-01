// const countries = require("./countries.js");
// const web_tech = require("./web_tech.js");
// First remove all the punctuations and change the string to array and count the number of words in the array
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = text.split(" ");
console.log(words);
console.log(words.length);

//In the following shopping cart add, remove, edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart);

// add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes("Meat")) {
	shoppingCart.unshift("Meat");
}
console.log(shoppingCart);

// add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes("Sugar")) {
	shoppingCart.push("Sugar");
}
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
// but im not, sorry
// modify Tea to 'Green Tea'
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

console.log("=======================");
// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
console.log(countries);
countries.includes("Ethiopia") ? console.log("ETHIOPIA") : countries.push("Ethiopia");
// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
console.log(webTechs);
webTechs.includes("Sass") ? console.log("Sass is a CSS preprocess") : webTechs.push("Sass");
console.log(webTechs);
console.log("=======================");
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
