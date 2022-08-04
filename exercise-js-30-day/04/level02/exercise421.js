// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadratic(a, b, c) {
	if (a === 0 && b === 0 && c === 0) {
		return `{0}`;
	}
	if (a === 0) {
		return `Error Divided by Zero`;
	}
	const xPos = (-b + Math.sqrt((b ^ 2) - 4 * a * c)) / (2 * a);
	const xNeg = (-b - Math.sqrt((b ^ 2) - 4 * a * c)) / (2 * a);
	return `{${xPos}, ${xNeg}}`;
}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const printArray = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
};

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
const showDateTime = () => {
	const tgl = new Date();
	return `${tgl.getDate()}/${tgl.getMonth()}/${tgl.getFullYear()} ${tgl.getHours()}:${tgl.getMinutes()}`;
};

// Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (a, b) => {
	console.log(`a then = ${a} , b then = ${b}`);
	[a, b] = [b, a];
	console.log(`a now = ${a}, b now = ${b}`);
};
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
const reverseArray = (arr) => {
	const arrTemp = [];
	for (let i = arr.length - 1; i > -1; i--) {
		arrTemp.push(arr[i]);
	}
	return arrTemp;
};

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
	const arrTemp = [];
	for (let i = arr.length - 1; i > -1; i--) {
		arrTemp.push(arr[i].toUpperCase());
	}
	return arrTemp;
}

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(arr, item) {
	arr.push(item);
	return arr;
}
// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an ite
function addItem(arr, index) {
	arr.splice(index, 1);
	return arr;
}
// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(num) {
	if (num < 0) {
		return `Only Accept Positive Integer`;
	}
	let odd = 0;
	let even = 0;
	for (let i = num; i > 0; i--) {
		if (i % 2 === 0) {
			even += 1;
		} else {
			odd += 1;
		}
	}
	console.log(`The number of even are ${even}`);
	console.log(`The number of odd are ${odd}`);
	return `Calculating done`;
}
// Write a function which takes any number of arguments and return the sum of the arguments
const sumAll = (...args) => {
	return args.reduce((sum, i) => sum + i, 0);
};

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
const userIdGen = function () {
	const idSource = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
	let id = "";
	let angka = 0;
	for (let i = 0; i < 7; i++) {
		angka = Math.floor(Math.random() * 100) % 62;
		id += idSource.charAt(angka);
	}
	return id;
};
console.log(userIdGen());
