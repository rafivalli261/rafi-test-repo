// Membuat Objek pada Javascript

// 1. Object Literal
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

// function Mahasiswa(nama, energi) {
// 	let mahasiswa = {};
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

// 	mahasiswa.makan = function (porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan`);
// 	};

// 	mahasiswa.main = function (jam) {
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, Selamat Bermain`);
// 	};

// 	return mahasiswa;
// }

// let rafi = Mahasiswa("Rafi Valli", 20);
// let xiao = Mahasiswa("Xiao", 22);

// 3. Constructor Function
class Mahasiswa {
	constructor(nama, energi) {
		this.nama = nama;
		this.energi = energi;

		this.makan = function (porsi) {
			this.energi += porsi;
			console.log(`Halo ${this.nama}, selamat makan`);
		};

		this.main = function (jam) {
			this.energi -= jam;
			console.log(`Halo ${this.nama}, Selamat Bermain`);
		};
	}
}

let rafi = new Mahasiswa("Rafi Valli", 20);
let xiao = new Mahasiswa("Xiao", 22);

// 4. Object.create
