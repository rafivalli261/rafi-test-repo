// fetch("https://equran.id/api/surat")
// 	.then((response) => response.json())
// 	.then((response) => console.log(response));

// Promise -> Janji
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronus di masa yang akan datang
// janji (terpenuhi / ingkar)
// state (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
// 	if (ditepati) {
// 		resolve("janji telah ditepati");
// 	} else {
// 		reject("Ingkar janji...");
// 	}
// });

// janji1.then((response) => console.log("OK! : " + response)).catch((response) => console.log("NOT OK! : " + response));

// contoh 2
// let ditepati = false;
// const janji2 = new Promise((resolve, reject) => {
// 	if (ditepati) {
// 		setTimeout(() => {
// 			resolve("Ditepati setelah beberapa waktu!");
// 		}, 2000);
// 	} else {
// 		setTimeout(() => {
// 			resolve("Tidak ditepati setelah beberapa waltu!");
// 		}, 2000);
// 	}
// });

// console.log("mulai");
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
// 	.finally(() => console.log("selesai menunggu!"))
// 	.then((response) => console.log("OK! : " + response))
// 	.catch((response) => console.log("NOT OK! : " + response));
// console.log("selesai");

// Promise All

const film = new Promise((resolve) => {
	setTimeout(() => {
		resolve([
			{
				judul: "Avengers",
				sutradara: "Tony Stark",
				producer: "Marvel",
			},
		]);
	}, 1000);
});

const chara = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve([
			{
				nama: "Xiao",
				atk: 20000,
				def: 3000,
			},
		]);
	}, 500);
});

// film.then((response) => console.log(response));
// chara.then((response) => console.log(response));

// Promise.all([film, chara]).then((response) => console.log(response));

Promise.all([film, chara]).then((response) => {
	const [film, chara] = response;
	console.log(film);
	// film.forEach((m) => console.log(m.judul));
	console.log(chara);
});
