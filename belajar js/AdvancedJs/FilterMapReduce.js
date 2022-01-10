/*

Array.prototype.filter()
Array.prototype.map()
Array.prototype.reduce()

*/

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// const angka2 = [];
// // mencari angka >= 3
// for (let index = 0; index < angka.length; index++) {
// 	if (angka[index] >= 3) {
// 		angka2.push(angka[index]);
// 	}
// }
// console.log(angka2);

// filter
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// reduce
// jumlahkan seluruh elemen pada array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(newAngka);

// Method Chaining
// Cari angka > 5
// kalikan 3
// jumlahkan

const hasil = angka
	.filter((a) => a > 5)
	.map((a) => a * 3)
	.reduce((acc, cur) => acc + cur);
console.log(hasil);
