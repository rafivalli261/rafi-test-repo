// Core Module
// File System

const fs = require("fs");
const readline = require("readline");

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
// fs.readFile("./test.txt", "utf-8", (err, cb) => {
// 	if (err) throw err;
// 	console.log(cb);
// });

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

r1.question("Masukkan Nama Anda : ", (nama) => {
	// TODO : Log answer in a database
	r1.question("Masukkan no HP anda : ", (noHP) => {
		const contact = {nama, noHP};
		const file = fs.readFileSync("data/contacts.json", "utf-8");
		const contacts = JSON.parse(file);
		contacts.push(contact);
		fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
		console.log(`Terimakasih sudah mengisi`);
		r1.close();
	});
});
