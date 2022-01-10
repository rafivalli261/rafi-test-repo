// Core Module
// File System

const fs = require("fs");

// menuliskan string ke file secara synchronus

// try {
// 	fs.writeFileSync("data/test.txt", "Hello World secara synchronus!");
// } catch (e) {
// 	console.log(e);
// }

// menuliskan string asynchronus
// fs.writeFile("data/test.txt", `Hello World secara Asynchronus`, (e) => {
// 	console.log(e);
// });

// membaca isi file (synchronus)
// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data);

// membaca isi file (asynchronus)
fs.readFile("./test.txt", "utf-8", (err, cb) => {
	if (err) throw err;
	console.log(cb);
});
