// 2.1 Execution Context, Hoisting & Scope

// var nama = "Rafi";
// console.log(nama);

// creation phase pada global context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase

// console.log(sayHello);

// var nama = "Rafi";
// var umur = 21;

// function sayHello() {
// 	console.log(`Halo, nama saya ${nama}, saya umur ${umur} tahun`);
// }

// cek link javascript visualizer

// function membuat local execution context
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

var nama = "Rafi Valli";
var username = "rafivalli261";

function cetakURL() {
	console.log(arguments);
	var instagramURL = "http://instagram.com/";
	return instagramURL + username;
}
console.log(cetakURL("XiaoGeming", "Qwerty", "http"));

// function a() {
// 	console.log(`Ini A`);

// 	function b() {
// 		console.log(`Ini B`);

// 		function c() {
// 			console.log(`Ini C`);
// 		}

// 		c();
// 	}
// 	b();
// }
// a();
