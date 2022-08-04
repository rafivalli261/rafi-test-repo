const users = [
	{
		_id: "ab12ex",
		username: "Alex",
		email: "alex@alex.com",
		password: "123123",
		createdAt: "08/01/2020 9:00 AM",
		isLoggedIn: false,
	},
	{
		_id: "fg12cy",
		username: "Asab",
		email: "asab@asab.com",
		password: "123456",
		createdAt: "08/01/2020 9:30 AM",
		isLoggedIn: true,
	},
	{
		_id: "zwf8md",
		username: "Brook",
		email: "brook@brook.com",
		password: "123111",
		createdAt: "08/01/2020 9:45 AM",
		isLoggedIn: true,
	},
	{
		_id: "eefamr",
		username: "Martha",
		email: "martha@martha.com",
		password: "123222",
		createdAt: "08/01/2020 9:50 AM",
		isLoggedIn: false,
	},
	{
		_id: "ghderc",
		username: "Thomas",
		email: "thomas@thomas.com",
		password: "123333",
		createdAt: "08/01/2020 10:00 AM",
		isLoggedIn: false,
	},
];

const tanggal = () => {
	const tgl = new Date();
	return `${tgl.getDate()}/${tgl.getMonth()}/${tgl.getFullYear()} ${tgl.getHours()}:${tgl.getMinutes()}`;
};

const idSource = "qwertyuiopasdfghjklzxcvbnm1234567890";
const idGen = function (data) {
	let id = "";
	let loop = true;
	let angka = "";
	while (loop) {
		for (let i = 0; i < 6; i++) {
			angka = Math.floor(Math.random() * 100) % 36;
			console.log(`angka : ${angka}`);
			id += idSource.charAt(angka);
		}
		// for (let i = 0; i < data.length; i++) {
		// 	if (id === data[i]._id) {
		// 		id = "";
		// 	}
		// }
		loop = data.filter((n) => n._id == id) > 0;
	}
	return id;
};

function signUp(username, email, password) {
	const isLoggedIn = false;
	const _id = idGen(users);
	const createdAt = tanggal();
	for (let i = 0; i < users.length; i++) {
		if (users[i].username == username) {
			return `${username} telah terdaftar. Coba dengan username yang lain`;
		}
	}
	users.push({
		_id,
		username,
		email,
		password,
		createdAt,
		isLoggedIn,
	});
	return `Selamat ${username}, Anda telah terdaftar dalam data kami.`;
}

function signIn(username, password) {
	const user = users.filter((u) => u.username == username)[0];
	const index = users.findIndex((n) => n.username === username);
	if (user === undefined) {
		return `User ${username} tidak ditemukan!\nMohon Periksa Ulang Input Anda`;
	}
	if (user.password != password) {
		return `Password salah!`;
	}

	users[index].isLoggedIn = true;

	return `Selamat ${username} anda berhasil login!`;
}

console.log(signUp("rafi", "rafi@email.id", "rafidotcom"));
console.log(signIn("rafi", "rafidotcom"));
users.forEach((n) => console.log(n));
