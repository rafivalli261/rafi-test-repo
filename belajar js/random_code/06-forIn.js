// The JavaScript for in statement loops through the properties of an Object:
const person = {fname: "John", lname: "Doe", age: 25};

let text = "";
for (let x in person) {
	text += person[x];
}
