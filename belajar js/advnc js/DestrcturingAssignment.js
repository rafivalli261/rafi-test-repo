/*
Expression pada javascript yang membuat kita dapat membongkar nilai dari array atau properti dari object ke dalam variable yang terpisah
~ MDN Web Docs
*/

// Destructuring Variable / Assignment

// Destructuring Array
const iori = ["xiao", "zhongli", "hutao", "eula"];
// const [chara1, chara2, chara3] = iori;

// skip items
// const [chara1, , , chara2] = iori;

// swap items
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
// 	return ["halo", "hai"];
// }
// const [a, b] = coba();
// console.log(b);

// Rest Parameter
// const [a, b, ...values] = ["hai", "halo", "selamat siang", "malam", "pagi"];
// console.log(a);
// console.log(b);
// console.log(values);

// console.log(chara1);
// console.log(chara2);

// Destructuring Object
// const hibiki = {
// 	nama: "Hibiki",
// 	role: "Support",
// 	atk: 3000,
// };

// const {nama, role, atk} = hibiki;
// console.log(nama);

// Assignment tanpa deklarasi objek

// ({nama, role, atk} = {
// 	nama: "Hibiki",
// 	role: "Support",
// 	atk: 3000,
// });
// console.log(nama);

// Assign ke variabel baru

// const hibiki = {
// 	nama: "Hibiki",
// 	role: "Support",
// 	atk: 3000,
// };

// const {nama: n, role: r, atk: a} = hibiki;
// console.log(n);

// Memberikan default value

// const hibiki = {
// 	nama: "Hibiki",
// 	role: "Support",
// 	atk: 3000,
// };

// const {nama, role, atk, game = "Blue Archive"} = hibiki;
// console.log(game);

// Rest Parameter

// const hibiki = {
// 	nama: "Hibiki",
// 	role: "Support",
// 	atk: 3000,
// 	game: "Blue Archive",
// };

// const {nama, ...values} = hibiki;

// console.log(values);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const laptop = {
	id: 1234,
	nama: "ASUS XYZ",
	ram: 9,
	produksi: "Indonesia",
};

function getIdLaptop({nama}) {
	return nama;
}

console.log(getIdLaptop(laptop));
