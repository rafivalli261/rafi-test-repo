const jikaGagal = () => console.log("Ini Gagal");
const jikaBerhasil = () => console.log("Ini Berhasil");

const programRandom01 = (value, fungsiYes, fungsiNo) => {
	if (value >= 7) {
		return fungsiYes();
	}

	return fungsiNo();
};

const nilai = 8;

setTimeout(() => {
	console.log("Ini Duluan tapi muncul belakangan");
}, 1000);

programRandom01(nilai, jikaBerhasil, jikaGagal);
