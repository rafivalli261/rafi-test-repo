const cetakNama = (nama) => `Hi, nama saya adalah ${nama}`;

const PI = 3.14;

const mahasiswa = {
	nama: "Rafi Valli",
	umur: 20,
	cetakMahasiswa() {
		return `Halo, nama saya ${this.nama}, saya berumur ${this.umur} tahun.`;
	},
};

class Orang {
	constructor() {
		console.log("Objek orang telah dibuat!!");
	}
}

// console.log("Hello World");

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
// 	cetakNama: cetakNama,
// 	PI: PI,
// 	mahasiswa: mahasiswa,
// 	Orang: Orang,
// };
// kalo namanya sama cukup tulis salah satu saja
module.exports = {cetakNama, PI, mahasiswa, Orang};
