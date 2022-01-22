/*
Fungsi yang dikirimkan sebagai parameter untuk fungsi lain
MDN

Fungsi yang dieksekusi setelah fungsi lain selesai dijalankan
Codeburst

*/

// Synchronus Callback
// function halo(name) {
// 	alert(`Halo ${name}`);
// }

// function tampilkanPesan(callback) {
// 	const nama = prompt("Masukkan nama : ");
// 	callback(nama);
// }

// tampilkanPesan((name) => {
// 	alert(`Halo ${name}`);
// });

// const chara = [
// 	{
// 		nama: "Xiao",
// 		region: "Liyue",
// 		vision: "Anemo",
// 		atk: 2910,
// 		def: 1345,
// 	},
// 	{
// 		nama: "Jean",
// 		region: "Monstadt",
// 		vision: "Anemo",
// 		atk: 2210,
// 		def: 1245,
// 	},
// 	{
// 		nama: "Yoimiya",
// 		region: "Inazuma",
// 		vision: "Pyro",
// 		atk: 2500,
// 		def: 1300,
// 	},
// ];
// console.log("mulai");
// chara.forEach((n) => {
// 	let u = 0;
// 	for (let i = 0; i < 10000000; i++) {
// 		u = u + i;
// 	}
// 	console.log(n.nama);
// });
// console.log("selesai");

// Asynchronus Callback
// function getDataMahasiswa(url, success, error) {
// 	let xhr = new XMLHttpRequest();

// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState === 4) {
// 			if (xhr.status === 200) {
// 				success(xhr.response);
// 			} else if (xhr.status === 404) {
// 				error();
// 			}
// 		}
// 	};

// 	xhr.open("get", url);
// 	xhr.send();
// }

// console.log("mulai");
// getDataMahasiswa(
// 	"JSON/mahasiswa.json",
// 	(results) => {
// 		const mhs = JSON.parse(results);
// 		mhs.forEach((m) => console.log(m.nama));
// 	},
// 	() => {
// 		console.log("error");
// 	}
// );
// console.log("selesai");

// Jquery

// console.log("mulai");
// $.ajax({
// 	url: "JSON/mahasiswa.json",
// 	success: (mhs) => {
// 		mhs.forEach((m) => {
// 			console.log(m.nama);
// 		});
// 	},
// 	error: (e) => {
// 		console.log(e.responseText);
// 	},
// });
// console.log("selesai");
