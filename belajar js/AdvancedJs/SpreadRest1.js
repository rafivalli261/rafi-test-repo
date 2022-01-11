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

const neme = document.querySelector(".name");
const huruf = [...neme.textContent].map((h) => `<span>${h}</span>`).join("");
console.log(huruf);
neme.innerHTML = huruf;
