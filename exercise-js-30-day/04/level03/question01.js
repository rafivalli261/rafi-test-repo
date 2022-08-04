// Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
const userIdGeneratedByUser = function () {
	const idSource = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
	let id = "";
	let arrId = [];
	let angka = 0;
	const charNum = prompt("Enter number of characters : ");
	const idNum = prompt("Enter number of ID : ");
	for (let i = 0; i < idNum; i++) {
		for (let j = 0; j < charNum; j++) {
			angka = Math.floor(Math.random() * 100) % 62;
			id += idSource.charAt(angka);
		}
		arrId.push(id);
		id = "";
	}
	return arrId;
};
console.log(userIdGeneratedByUser());
