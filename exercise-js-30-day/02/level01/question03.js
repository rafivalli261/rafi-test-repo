// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

const a = 4;
const b = 3;
// using if else

if (a > b) {
	console.log(`a is greater than b`);
} else {
	console.log(`a is less than b`);
}

// ternary operator.
const result = a > b ? `a is greater than b` : `a is less than b`;
