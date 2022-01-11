/*
Spread Operator 
"Memecah (expand / unpack) iterables menjadi single element"


Rest Parameter

*/

// Spread Operator

// const mhs = ["andi", "budi", "candra"];
// console.log(...mhs);

// Menggabungkan 2 array
// const mhs = ["andi", "budi", "candra"];
// const dosen = ["dragon", "enigma", "fireflies"];
// const orang = mhs.concat(dosen);
// const orang = [...mhs, "dynamicSlash", ...dosen];

// console.log(orang);

// Mengcopy array
// const chara = ["hibiki", "iori", "aru"];
/*
jangan pake 
const charaLain = chara;
karena sebenarnya array yang baru masih merujuk ke array lama, misal charaLain diubah, chara juga bakal berubah
*/
// const charaLain = [...chara];
// charaLain[0] = "tsubaki";
// console.log(chara);
// console.log(charaLain);

// const webtoon = document.querySelectorAll(".nama");

// const wbtn = [];
// for (const w of webtoon) {
// 	wbtn.push(w.textContent);
// }
// console.log(wbtn);

// const wbtn = [...webtoon].map((m) => m.textContent);
// console.log(wbtn);

// const neme = document.querySelector(".name");
// const huruf = [...neme.textContent].map((h) => `<span>${h}</span>`).join("");
// console.log(huruf);
// neme.innerHTML = huruf;

// Rest Parameter
// function myFunc(...myArgs) {
// 	// return `a = ${a} b = ${b}, myAgrs = ${myArgs}`;
// 	// return myArgs;
// 	return myArgs;
// }
// console.log(myFunc(1, 2, 3, 4, 5));

/*
function jumlahkan(...angka) {
	// let total = 0;
	// for (const n of angka) {
	// 	total += n;
	// }
	// return `Nilai nya dalah ${total}`;
	return angka.reduce((a, b) => a + b);
}

console.log(jumlahkan(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
*/

// array destructuring
// const kelompok1 = ["jean", "kaeya", "eula", "lisa", "diluc"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);

// object destructuring
// const team = {
// 	pm: "hutao",
// 	frontEnd1: "chongyun",
// 	frontEnd2: "xinqiu",
// 	backEnd: "xiao",
// 	ux: "xiangling",
// 	devOps: "zhongli",
// };

// const {pm, ...myTeam} = team;
// console.log(pm);

// filtering
function filterBy(type, ...values) {
	return values.filter((v) => typeof v === type);
}

console.log(filterBy("boolean", 1, 2, "ganyu", false, 10, true, "dainself"));
