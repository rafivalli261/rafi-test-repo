// GET DATA FROM ANIME
const https = require("https");

https
	.get("https://zenquotes.io/api/random", (res) => {
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
			console.log(`Quotes : ${students[0].q}`);
			console.log(`Author : ${students[0].a}`);
		});
	})
	.on("error", (err) => {
		console.log("Error: ", err.message);
	});
