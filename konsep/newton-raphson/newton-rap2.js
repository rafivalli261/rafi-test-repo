const epsilon1 = 0.000001; // toleransi galat akar hampiran
const epsilon2 = 0.000000001; // toleransi nilai yang hampir 0
const Nmaks = 30; // jumlah maksimum lelaran

let x0 = 6;
let x1;
let temp;
let i = 0;
let berhenti = false;

const f = (x) => {
	return x ** 2 - 2 * x - 8;
};

const f_aksen = (x) => {
	return x * 2 - 2;
};

do {
	if (Math.abs(f_aksen(x1)) < epsilon2) {
		berhenti = true;
	} else {
		x1 = x0 - f(x0) / f_aksen(x0);
		console.log(`Lelaran ke ${i} : Nilai akar x = ${x1}, f(x) = ${f_aksen(x1)}`);
		temp = x0;
		x0 = x1;
		i++;
	}
} while (Math.abs(x1 - temp) > epsilon1 || berhenti || i > Nmaks);

if (berhenti) {
	console.log(`Pembagian dengan bilangan hampir nol`);
} else {
	if (i > Nmaks) {
		console.log(`Divergen`);
	} else {
		console.log(`Hampiran akar x = ${x1}`);
	}
}
