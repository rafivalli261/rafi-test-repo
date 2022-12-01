const f = (x) => {
	return x ** 2 - 2 * x - 8;
};
const f1 = (x) => {
	return 2 * x - 2;
};

const maxIt = 20;
const tol = 0.00001;
let i = 0;
let x0 = 1000000;
let x1 = x0;
const galat = 0.000001;

console.log(`Iteration ${i} : x = ${x0} , f(x) = ${f(x0)}`);
while (Math.abs(f(x1)) > tol || i > maxIt) {
	i++;
	let xi = x1 - f(x1) / f1(x1);
	console.log(`Iteration ${i} : x = ${xi} , f(x) = ${f(xi)}`);
	if (Math.abs(xi - x1) < galat) {
		break;
	}
	x1 = xi;
}

// do {
// 	i++;
// 	let xi = x1 - f(x1) / f1(x1);
// 	console.log(`Iteration ${i} : x = ${xi} , f(x) = ${f(xi)}`);
// 	x1 = xi;
// } while (Math.abs(xi - x1) > galat && i < maxIt);

// kode diambil dari https://towardsdatascience.com/develop-your-own-newton-raphson-algorithm-in-python-a20a5b68c7dd
// dimodifikasi ke dalam bahasa javascript
// kelemahan :
// 1. kode masih belum rapi
// 2. akurasi kurang maksimal, lelaran berhenti sebelum mencapai akurasi maksimal
/*
# Newton-Raphson Algorithm
max_iter = 20  # Max iterations
tol = 1E-15  # Tolerance
i = 0  # Iteration counter
x0 = 1  # Initial guess
xi_1 = x0
print(‘Iteration ‘ + str(i) + ‘: x = ‘ + str(x0) + ‘, f(x) = ‘ + 
      str(f(x0)))
# Iterating until either the tolerance or max iterations is met
while abs(f(xi_1)) > tol or i > max_iter:
    i = i + 1
    xi = xi_1-f(xi_1)/dfdx(xi_1)  # Newton-Raphson equation
    print(‘Iteration ‘ + str(i) + ‘: x = ‘ + str(xi) + ‘, f(x) = ‘ +    
          str(f(xi)))
    xi_1 = xi

*/
