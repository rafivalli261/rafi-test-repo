// Create an empty object called dog
const dog = {};
// Print the the dog object on the console
console.log(dog);
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog._name = "Danny";
dog["_legs"] = 4;
dog._color = "Polkadot";
dog._age = 20;
dog._bark = function () {
	return `woof woof`;
};

// Get name, legs, color, age and bark value from the dog object
console.log(dog._name);
console.log(dog._color);
console.log(dog._legs);
console.log(dog._age);
console.log(dog._bark());

// Set new properties the dog object: breed, getDogInfo
dog._breed = true;
dog._getDogInfo = function () {
	return `Anjing ${this._name} berkaki ${this._legs} dengan warna ${this._color} serta umur ${this._age} tahun. Suaranya ${this._bark()} dan breed = ${this._breed}`;
};
console.log(dog._getDogInfo());
