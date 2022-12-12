/* 
for (variable of iterable) 
    statement;
The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. 
Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.
*/

const negara = new Map();
negara.set("Indonesia", "Jakarta");
negara.set("Malaysia", "Kuala Lumpur");
negara.set("Jepang", "Tokyo");
negara.set("Australia", "Sydney");
negara.set("Rusia", "Moskow");
negara.set("Turki", "Istanbul");
negara.set("Jerman", "Berlin");

for (const ibukota of negara) {
	console.log(ibukota);
}

for (const huruf of "Merdeka") {
	console.log(huruf);
}

const chara = ["Xiao", "RafiValli", "Kokomi", "Hu Tao", "Zhongli", "Cyno"];

for (const karakter of chara) {
	console.log(karakter);
}
