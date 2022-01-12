const mhs = {
	nama: "Rafi",
	umur: 20,
};
let i = [
	[1, 2, 3],
	[2, 3, 4, 5],
];
// console.log(i);

class Alat {
	constructor(nama, harga, merek) {
		this.nama = nama;
		this.harga = harga;
		this.merek = merek;
		console.log(`Object baru telah dibuat!`);
	}
	tampilInfo() {
		return `Nama Barang : ${this.nama}, Harga : ${this.harga}`;
	}
	a() {
		console.log(this.nama);
	}
	b() {
		setTimeout(() => {
			console.log(this);
		}, 3000);
	}
	c() {
		console.log(this.merek);
	}
}

const hp = new Alat("SmartPhone", 2500000, "AUSU");
console.log(hp.tampilInfo());
hp.a();
hp.b();
hp.c();
