// Latihan
// 1. HTML Fragments
// const mhs = {
// 	nama: "Rafi Valli",
// 	umur: 20,
// 	nim: "123456",
// 	email: "rafivalli@rafi.com",
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`;
// 2. Looping
// const mhs = [
// 	{
// 		nama: "Rafi Valli",
// 		email: "rafivalli@rafi.com",
// 	},
// 	{
// 		nama: "Sand Box",
// 		email: "sandbox@rafi.io",
// 	},
// 	{
// 		nama: "Talk less do more!",
// 		email: "more@talk.com",
// 	},
// ];

// const el = ` <div class="mhs">
// ${mhs
// 	.map(
// 		(mup) => `<ul>
//     <li>${mup.nama}</li>
//     <li>${mup.email}</li>
// </ul>`
// 	)
// 	.join("")} </div>
// `;
// 3. Conditional
// ternary
// const lagu = {
// 	judul: "Tetap Dalam Jiwa",
// 	penyanyi: "Isyana Saraswati",
// 	// feat: "undefined",
// };

// const el = `<div class="lagu">
// <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ``}</li>
// </ul>
// </div>`;
// 4. Nested
// HTML Fragments bersarang

const mhs = {
	nama: "Rafi Valli",
	semester: 4,
	mataKuliah: ["Rekayasa Web", "Analisis Desain dan Algoritma", "Kalkulus", "Pemrograman Berbasis Objek"],
};

function cetakMataKuliah(matakuliah) {
	return `
    <ol>
        ${matakuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>
    `;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester : ${mhs.semester}</span>
<h4>Mata Kuliah : </h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
