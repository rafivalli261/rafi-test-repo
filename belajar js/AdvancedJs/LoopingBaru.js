/*
- for .. of
Creates a loop iterating over iterable object
~ MDN Dev

Iterable Object:
    String
    Array
    Argumemts / NodeList
    TypedArray
    Map
    Set
    User-defined iterables


for .. in
Creates a loop only iterating over enumerable
~ MDN Dev
Object


*/

// For Of

// Array
// const mhs = ["Hutao", "Xiao", "Xinqiu", "Chongyun", "Xiangling"];

// // for (let i = 0; i < mhs.length; i++) {
// // 	console.log(mhs[i]);
// // }

// // mhs.forEach((m) => console.log(m));

// for (const [i, m] of mhs.entries()) {
// 	console.log(`Mahasiswa ${m} dengan indeks ${i}.`);
// }

// String
// const nama = "Yoimiya";
// for (const n of nama) {
// 	console.log(n);
// }

// Node List
// const liNama = document.querySelectorAll(".nama");
// console.log(liNama);
// liNama.forEach((name) => console.log(name.textContent));
// for (const n of liNama) {
// 	console.log(n.innerHTML);
// }

// Arguments
// function jumlahkanAngka() {
// 	// console.log(arguments);
// 	let jumlah = 0;
// 	for (const a of arguments) {
// 		jumlah += a;
// 	}
// 	return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// For In
const mhs = {
	nama: "Me",
	umur: 2,
	email: "ra@ra.comf",
};

for (m in mhs) {
	console.log(mhs[m]);
}
