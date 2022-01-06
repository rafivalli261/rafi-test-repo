// Arrow Function
// Bentuk lain yang lebih ringkas dari function ekspresion
// const tampilNama = function (nama) {
// 	return `Halo ${nama}`;
// };
// console.log(tampilNama("Rafi"));

// const tampilNama = (nama) => {
// 	return `Halo ${nama}`;
// };
// console.log(tampilNama("Rafi"));

// const tampilNama = (nama, waktu) => {
// 	return `Selamat ${waktu}, ${nama}`;
// };
// console.log(tampilNama("Rafi", "Tahun Baru"));

// const tampilNama = (nama) => `Halo ${nama}`;
// console.log(tampilNama("Rafi"));

// const tampilNama = () => `Hello World`;
// console.log(tampilNama());

// let mahasiswa = ["Lucy Green", "Holly West", "Amy Prince"];

// // let jumlahHuruf = mahasiswa.map(function (nama) {
// // 	return nama.length;
// // });

// // let jumlahHuruf = mahasiswa.map((nama) => nama.length);

// let jumlahHuruf = mahasiswa.map((nama) => ({nama: nama, jmlHuruf: nama.length}));

// console.table(jumlahHuruf);

// Konsep this pada arrow function
// constructor function
// const Mahasiswa = function () {
// 	this.nama = "Rafi";
// 	this.umur = "20";
// 	console.log(this);
// 	this.sayHello = function () {
// 		console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur}`);
// 	};
// };

// const rafi = new Mahasiswa();

// Arrow Function
const Mahasiswa = function () {
	this.nama = "Rafi";
	this.umur = "20";
	console.log(this);
	this.sayHello = () => {
		console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
	};
};

const rafi = new Mahasiswa();
rafi.sayHello();
// Object Literal
// const mhs1 = {
// 	nama: "Rafi",
// 	umur: 20,
// 	sayHello: () => {
// 		console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
// 	},
// };
