/*
JSON.stringify() = Object -> JSON
JSON.parse() = JSON -> Object

Mengakses JSON
AJAX
- XMLHttpRequest
- JQUERY

*/

// Object Jadi JSON
// let mahasiswa = {
// 	nama: "Rafi Valli",
// 	kelas: "XII MIPA 2",
// 	nis: "1948",
// };

// let mhs = JSON.stringify(mahasiswa);

// console.log(mhs);

// JSON jadi Object
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
// 	if (xhr.readyState == 4 && xhr.status == 200) {
// 		let siswa = JSON.parse(this.responseText);
// 		console.log(siswa);
// 	}
// };
// xhr.open("GET", "latihan1.json", true);
// xhr.send();

$.getJSON("latihan1.json", function (data) {
	console.log(data);
});
