// MAIN
setInterval(ubahHari, 1000);
setInterval(ubahWaktu, 1000);

// funsi untuk mengeset waktu jam : menit : detik
function ubahWaktu() {
	const waktu = new Date();
	let jam = cekWaktu(waktu.getHours());
	let menit = cekWaktu(waktu.getMinutes());
	let detik = cekWaktu(waktu.getSeconds());
	document.querySelector(".waktu").innerHTML = `${jam} : ${menit} : ${detik}`;
}

// fungsi untuk mengubah nilai tanggal
function ubahHari() {
	const tanggalLengkap = new Date();
	let hari = pilihHari(tanggalLengkap.getDay());
	let tanggal = cekWaktu(tanggalLengkap.getDate());
	let bulan = pilihBulan(tanggalLengkap.getMonth());
	let tahun = tanggalLengkap.getFullYear();
	document.querySelector(".hari").innerHTML = `Hari ${hari}, ${tanggal} ${bulan} ${tahun}`;
}

// fungsi untuk mengubah hari (angka) menjadi hari (kata)
function pilihHari(hari) {
	switch (hari) {
		case 0:
			return "Minggu";
		case 1:
			return "Senin";

		case 2:
			return "Selasa";

		case 3:
			return "Rabu";

		case 4:
			return "Kamis";

		case 5:
			return "Jumat";

		case 6:
			return "Sabtu";
		default:
			break;
	}
}

function pilihBulan(bulan) {
	switch (bulan) {
		case 0:
			return "Januari";
		case 1:
			return "Februari";
		case 2:
			return "Maret";
		case 3:
			return "April";
		case 4:
			return "Mei";
		case 5:
			return "Juni";
		case 6:
			return "Juli";
		case 7:
			return "Agustus";
		case 8:
			return "September";
		case 9:
			return "Oktober";
		case 10:
			return "November";
		case 11:
			return "Desember";
		default:
			break;
	}
}

// fungsi untuk menambahkan angka 0 didepan waktu
function cekWaktu(tm) {
	if (tm < 10) {
		return `0${tm}`;
	} else {
		return tm;
	}
}

// getDate()	Returns the day of the month (from 1-31)
// getDay()	Returns the day of the week (from 0-6)
// getFullYear()	Returns the year
// getHours()	Returns the hour (from 0-23)
// getMilliseconds()	Returns the milliseconds (from 0-999)
// getMinutes()	Returns the minutes (from 0-59)
// getMonth()	Returns the month (from 0-11)
// getSeconds()	Returns the seconds (from 0-59)
// getTime()	Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
// getTimezoneOffset()	Returns the time difference between UTC time and local time, in minutes
// getUTCDate()	Returns the day of the month, according to universal time (from 1-31)
// getUTCDay()	Returns the day of the week, according to universal time (from 0-6)
// getUTCFullYear()	Returns the year, according to universal time
// getUTCHours()	Returns the hour, according to universal time (from 0-23)
// getUTCMilliseconds()	Returns the milliseconds, according to universal time (from 0-999)
// getUTCMinutes()	Returns the minutes, according to universal time (from 0-59)
// getUTCMonth()	Returns the month, according to universal time (from 0-11)
// getUTCSeconds()	Returns the seconds, according to universal time (from 0-59)
