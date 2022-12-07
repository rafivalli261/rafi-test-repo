// GET DATA FROM ANIME
const https = require("https");

https
	.get("https://api.jikan.moe/v4/random/anime", (res) => {
		let data = [];
		const headerDate = res.headers && res.headers.date ? res.headers.date : "no response date";
		console.log("Status Code:", res.statusCode);
		console.log("Date in Response header:", headerDate);

		res.on("data", (chunk) => {
			data.push(chunk);
		});

		res.on("end", () => {
			console.log("Response ended: ");
			const students = JSON.parse(Buffer.concat(data).toString());
			console.log(`Judul Anime : ${students.data.title}`);
			console.log(`Jumlah Episode : ${students.data.episodes}`);
			console.log(`Tahun : ${students.data.year}`);
			console.log(`Sinopsis : ${students.data.synopsis}`);
		});
	})
	.on("error", (err) => {
		console.log("Error: ", err.message);
	});
