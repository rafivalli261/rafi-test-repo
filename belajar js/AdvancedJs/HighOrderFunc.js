/* 
High Order Function

Function yang beroperasi pada function yang lain ,baik itu digunakan dalam argument, maupun sebagai return value ~ https://eloquentjavascript.net

First Class Function

Javascript memperlakukan function sebagai Object ~ sitepoint.com

*/

// function kerjakanTugas -> Higher Order Function
// argumen/parameter 'selesai' adalah callback
// callback -> function sebagai argumen
// Higher Order Function -> function yang punya callback atau punya return function

function kerjakanTugas(matakuliah, selesai) {
	console.log(`Mulai mengerjakan ${matakuliah} ...`);
	selesai();
}

function sambel() {
	setTimeout(() => {
		alert(`Selesai mengerjakan tugas!`);
	}, 2000);
}

kerjakanTugas("Kalkulus", sambel);

/*
Kenapa menggunakan HOF?
- Abstraksi
Semakin besar suatu program, semakin tinggi kompleksitasnya, semakin membingungkan programmernya ~ eloquentjavascript.net

Ada dua cara untuk merancang sebuah software: Cara pertama adalah untuk membuat programnya sesederhana mungkin sehingga jelas-jelas tidak ada kekurangannya, dan cara lainnya adalah untuk membuat programnya se-kompleks mungkin sehingga tidak ada kekurangan yang jelas ~ C.A.R. Hoare, 1980 ACM Turing Award Lecture
 
Contoh HOF
Array.prototype.map()
Array.prototype.filter()
Array.prototype.reduce()

*/
