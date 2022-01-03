// Membuat Objek pada Javascript

// 1. Object Literal
// PROBLEM : tidak efektif untuk banyak objek
// let mahasiswa = {
// 	nama: "Rafi Valli",
// 	energi: 10,
// 	makan: function (porsi) {
// 		this.energi = this.energi + porsi;
// 		console.log(`Selamat Datang ${this.nama}, Selamat Makan`);
// 	},
// };
// tidak boleh ada variable yang sama
// kok ada undefined ya, hmmm

// 2. Function Declaration

// const methodMahasiswa = {
// 	makan: function (porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan`);
// 	},

// 	main: function (jam) {
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, Selamat Bermain`);
// 	},
// };

// function Mahasiswa(nama, energi) {
// 	let mahasiswa = {};
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;
// 	mahasiswa.makan = methodMahasiswa.makan;
// 	mahasiswa.main = methodMahasiswa.main;

// 	return mahasiswa;
// }

// let rafi = Mahasiswa("Rafi Valli", 20);
// let xiao = Mahasiswa("Xiao", 22);

// 3. Constructor Function
// class Mahasiswa {
// 	constructor(nama, energi) {
// 		this.nama = nama;
// 		this.energi = energi;

// 		this.makan = function (porsi) {
// 			this.energi += porsi;
// 			console.log(`Halo ${this.nama}, selamat makan`);
// 		};

// 		this.main = function (jam) {
// 			this.energi -= jam;
// 			console.log(`Halo ${this.nama}, Selamat Bermain`);
// 		};
// 	}
// }

// let rafi = new Mahasiswa("Rafi Valli", 20);
// let xiao = new Mahasiswa("Xiao", 22);

// 4. Object.create

// const methodMahasiswa = {
// 	makan: function (porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, Selamat Makan`);
// 	},

// 	main: function (jam) {
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, Selamat Bermain`);
// 	},

// 	tidur: function (jam) {
// 		this.energi += jam + 2;
// 		console.log(`Halo ${this.nama}, Selamat Beraktifitas`);
// 	},
// };

// function Mahasiswa(nama, energi) {
// 	let mahasiswa = Object.create(methodMahasiswa);
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

// 	return mahasiswa;
// }

// let rafi = Mahasiswa("Rafi Valli", 20);
// let xiao = Mahasiswa("Xiao", 22);

// ~~~~~~~~~~~~~~~~~~~~~~~
// Prototype
