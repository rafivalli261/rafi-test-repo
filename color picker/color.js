//0 - 6.25
//6.26 - 12.51
// let marco = 0;
// while (marco < 100) {
// 	if (marco === 0) {
// 		console.log(`dari ${marco} sampai ${marco + 6.25}`);
// 	} else {
// 		console.log(`dari ${marco + 0.01} sampai ${marco + 6.25}`);
// 	}
// 	marco += 6.25;
// }

let a = "#";
let x = 0;

let y = null;
let i = 0;

for (i = 0; i < 6; i++) {
	x = Math.random() * 100;
	console.log(x);

	if (x >= 0 && x <= 6.25) {
		y = "0";
	} else if (x >= 6.26 && x <= 12.5) {
		y = "1";
	} else if (x >= 12.51 && x <= 18.75) {
		y = "2";
	} else if (x >= 18.76 && x <= 25) {
		y = "3";
	} else if (x >= 25.01 && x <= 31.25) {
		y = "4";
	} else if (x >= 31.26 && x <= 37.5) {
		y = "5";
	} else if (x >= 37.51 && x <= 43.75) {
		y = "6";
	} else if (x >= 43.76 && x <= 50) {
		y = "7";
	} else if (x >= 50.01 && x <= 56.25) {
		y = "8";
	} else if (x >= 56.26 && x <= 62.5) {
		y = "9";
	} else if (x >= 62.51 && x <= 68.75) {
		y = "a";
	} else if (x >= 68.76 && x <= 75) {
		y = "b";
	} else if (x >= 75.01 && x <= 81.25) {
		y = "c";
	} else if (x >= 81.26 && x <= 87.5) {
		y = "d";
	} else if (x >= 87.6 && x <= 93.75) {
		y = "e";
	} else {
		y = "f";
	}
	a = a + y;
}

console.log(a);

const doc = document.querySelector("h1");
const docx = document.querySelector("body");
doc.innerHTML = a;
docx.style.backgroundColor = a;
//dari 0 sampai 6.25
//dari 6.26 sampai 12.5
//dari 12.51 sampai 18.75
//dari 18.76 sampai 25
//dari 25.01 sampai 31.25
//dari 31.26 sampai 37.5
//dari 37.51 sampai 43.75
//dari 43.76 sampai 50
//dari 50.01 sampai 56.25
//dari 56.26 sampai 62.5
//dari 62.51 sampai 68.75
//dari 68.76 sampai 75
//dari 75.01 sampai 81.25
//dari 81.26 sampai 87.5
//dari 87.51 sampai 93.75
//dari 93.76 sampai 100
