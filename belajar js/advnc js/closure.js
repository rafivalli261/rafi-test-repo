// closure adalah kombinasi antara function dan lingkungan leksikal (leksical scope) di dalam function tersebut ~ MDN

// closure adalah sebuah function ketika memiliki akses ke parent scope-nya, meskipun parent scope-nya sudah selesai dieksekusi ~ w3school

// closure adalah sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan saat ia ciptakan ~ Code Fellow

// Closure adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain ~ Techsith

// Lexical Scope -> function dalam punya akses terhadap variable diluar function nya
function init() {
	// let nama = "Rafi"; // local variable
	return function (nama) {
		// inner function (closure*)
		console.log(nama); // akses ke parent variable
	};
}
let panggilNama = init();
panggilNama("Rafi");
panggilNama("Lorem");
// Kenapa belajar closure?
// 1. Untuk membuat function factories ~ MDN
// 2. Untuk membuat private method ~ MDN

// function ucapkanSalam(waktu) {
// 	return function (nama) {
// 		console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
// 	};
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatSore = ucapkanSalam("Sore");

// // selamatPagi("Rafi");
// // selamatSiang("Hibiki");
// // selamatSore("Iori");

// console.dir(selamatSore);

let add = (function () {
	let counter = 0;
	return function () {
		return ++counter;
	};
})();

// immediately invoke fenction

console.log(add());
console.log(add());
console.log(add());
