// Check if a day is weekend day or a working day. Your script will take day as an input.
const day = prompt(`What is the day today?`).toLowerCase();
if (day == "sunday" || day == "saturday") {
	alert(`${day} is a weekend`);
} else {
	alert(`${day} is a working day`);
}
