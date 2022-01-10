// const nama = "Rafi Valli";
// // console.log(nama);

// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama));

//console.log(window); //ndak jalan kalo di node js, kalo di browser sabi

// const cetakNama = require("./script");
// const fs = require("fs");
// const cetakNama = require("./script"); // local module
// const moment = require("moment"); //third party module

const jsMod1 = require("./script");

// console.log(jsMod1);
console.log(jsMod1.cetakNama("Bajingan"), jsMod1.PI, jsMod1.mahasiswa.cetakMahasiswa(), new jsMod1.Orang());
