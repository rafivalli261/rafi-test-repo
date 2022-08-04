// Write a function generateColors which can generate any number of hexa or rgb colors.
const generateColor = (type, num) => {
	let colorCollection = [];
	if (type == "hexa") {
		const idSource = "1234567890abcdef";
		let colorCode = "";
		let angka = "";
		for (let i = 0; i < num; i++) {
			for (let j = 0; j < 6; j++) {
				angka = Math.floor(Math.random() * 100) % 16;
				colorCode += idSource.charAt(angka);
			}
			colorCollection.push(colorCode);
			colorCode = "";
		}
	} else {
		let a = 0;
		let b = 0;
		let c = 0;
		for (let i = 0; i < num; i++) {
			a = Math.floor(Math.random() * 1000) % 255;
			b = Math.floor(Math.random() * 1000) % 255;
			c = Math.floor(Math.random() * 1000) % 255;
			colorCollection.push(`rgb(${a}, ${b}, ${c})`);
		}
	}
	return colorCollection;
};
/*
console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
*/
// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
const factorial = (num) => {
	if (num <= 1) {
		return 1;
	} else {
		return n * factorial(num - 1);
	}
};

// Call your function isEmpty, it takes a parameter and it checks if it is empty or no
function isEmpty(el) {
	if (el) return true;
	return false;
}

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(arr) {
	arr.forEach((n) => {
		if (typeof n != "number") {
			return `Not a Number`;
		}
	});
	return arr.reduce((total, i) => i + total, 0) / arr.length;
}
