/*
Bentuk yang lebih kompleks dari Template Literals, memungkinkan kita untuk membaca template literals melalui sebuah function
~MDN Web Docs
*/
// Tagged Templates
// const nama = "Rafi Valli";
// const umur = 20;

// function coba(st, ...values) {
// 	// let result = "";
// 	// st.forEach((str, i) => {
// 	// 	result += `${str}${values[i] || ""}`;
// 	// });
// 	// return result;
// 	return st.reduce((result, str, i) => `${result}${str}${values[i] || ""}`, "");
// }

// const str = coba`Halo, nama saya ${nama} saya berumur ${umur} tahun`;
// console.log(str);

// Highlight
const nama = "Rafi Valli";
const umur = 20;
const email = "rafivalli@rafi.com";

function highlight(st, ...values) {
	return st.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`, "");
}

const str = highlight`Halo, nama saya ${nama} saya berumur ${umur} tahun, email saya adalah ${email}`;
console.log(str);
document.body.innerHTML = str;
